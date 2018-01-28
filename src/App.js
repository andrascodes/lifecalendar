import React, { Component } from 'react'
import './App.css'

import { DateManipulation, Storage, createDataAPI } from './lib'

import { Calendar, CountrySelector } from './components'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: undefined,
      birthDate: undefined,
      country: undefined,
      gender: undefined,
      lifeExpectancy: 80,
      generateCalendar: false,
    }
  }

  DataAPI = createDataAPI(fetch)

  componentDidMount() {
    const { name, birthDate, lifeExpectancy } = Storage.load()
    if(birthDate !== undefined && lifeExpectancy !== undefined) {
      // returning user
      return this.setState(state => ({
        name,
        birthDate,
        lifeExpectancy,
        generateCalendar: true
      }))
    }
  }

  handleNameChange = (event) => {
    event.persist()
    this.setState(state => ({
      name: event.target.value
    }))
  }

  handleBirthdateChange = (event) => {
    event.persist()
    this.setState(state => ({
      birthDate: new Date(event.target.value).valueOf()
    }))
  }

  handleCountrySelect = (event) => {
    event.persist()
    this.setState(state => ({
      country: event.target.value
    }))
  }

  handleGenderSelect = (event) => {
    event.persist()
    this.setState(state => ({
      gender: event.target.value
    }))
  }

  handleCreateCalendarButtonClick = async (event) => {
    event.preventDefault()

    try {
      const result = await this.DataAPI.getLifeExpectancy(this.state.gender, this.state.birthDate, this.state.country)
      const lifeExpectancy = Math.floor(Number(result.total_life_expectancy))
  
      Storage.save({
        name: this.state.name,
        birthDate: this.state.birthDate,
        lifeExpectancy: lifeExpectancy
      })
  
      this.setState(state => ({
        lifeExpectancy,
        generateCalendar: true
      }))
    }
    catch(error) {

      Storage.save({
        name: this.state.name,
        birthDate: this.state.birthDate,
        lifeExpectancy: this.state.lifeExpectancy
      })

      this.setState(state => ({
        generateCalendar: true
      }))
    }

  }

  render() {

    if(this.state.generateCalendar === false) {
      return (
        <div className="App">
          <form id="LoginForm" onSubmit={this.handleCreateCalendarButtonClick}>

            <label htmlFor="nameInput">
              Name:
              <input id="nameInput" type="text" name="name" onChange={this.handleNameChange} />
            </label>

            <label htmlFor="birthDateInput">
              Date of birth:
              <input id="birthDateInput" type="date" name="date" 
                     min="1920-01-01" max="2059-12-31"
                     required
                     onChange={this.handleBirthdateChange}
              />
            </label>

            <CountrySelector onChange={this.handleCountrySelect}/>

            <label htmlFor="selectGender">
              Gender:
              <select name="selectGender" id="selectGender" onChange={this.handleGenderSelect}>
                <option value="other">Not specified</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <button 
              type="submit" 
              name="submitButton" 
              id="createCalendarButton"
            >
              Create Calendar
            </button>
          </form>
          <div id="LifeExpectancyIndicator">
            <h2>{`${(this.state.name) ? `${this.state.name}, your` : 'Your'} life expectancy is:`}</h2>
            <h1>{`${this.state.lifeExpectancy || 80} years`}</h1>
          </div>
        </div>
      )
    }
    else {
      let introText = `You have only ${DateManipulation.getWeeksRemaining(this.state.birthDate, this.state.lifeExpectancy)} weeks remaining`
      if(this.state.name !== undefined) {
        introText = `${this.state.name}, only ${DateManipulation.getWeeksRemaining(this.state.birthDate, this.state.lifeExpectancy)} weeks remain`
      }
      return (
        <div className="App">
          <div id="introText">
            <h1>
              { introText }
            </h1>
          </div>
          <Calendar 
            birthYear={new Date(this.state.birthDate).getFullYear()}
            birthDate={this.state.birthDate}
            lifeExpectancy={this.state.lifeExpectancy}
          />
        </div>
      )
    }
  }
}

export default App;
