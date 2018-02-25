import React, { Component } from 'react'

import './App.css'

import { Header, Calendar, Footer } from './components'

import { getToday } from './utils/DateManipulation'
import { saveUserInfo, loadUserInfo } from './lib/DataPersistingApi'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'there',
      birthDate: getToday(),
      headerEdit: false,
      invalidDate: false
    }
  }

  componentDidMount() {
    const { name, birthDate } = loadUserInfo()
    if(name !== undefined && birthDate !== undefined) {
      this.setState(state => ({
        name,
        birthDate
      }))
    }
  }

  addRefsToDOMElement = (elementName) => (element) => {
    this[elementName] = element
  }

  handleTextfieldClickInHeader = () => {
    this.setState(state => ({
      headerEdit: true
    }))
  }

  handleEnterPressInHeader = (e) => {
    e.preventDefault()

    const birthObj = {
      year: this.yearInput.controlEl.value,
      month: this.monthSelector.controlEl.value,
      day: this.dayInput.controlEl.value
    }
    if(Number(birthObj.month) < 10) {
      birthObj.month = `0${birthObj.month}`
    }

    const newBirthDate = new Date(`${birthObj.year}-${birthObj.month}-${birthObj.day}`)
    const year = Number(birthObj.year)
    const month = Number(birthObj.month)
    const day = Number(birthObj.day)

    if(
      newBirthDate.getFullYear() === year &&
      newBirthDate.getMonth() === month - 1 &&
      newBirthDate.getDate() === day &&
      newBirthDate.valueOf() <= Date.now()
    ) {
      const name = this.nameInput.controlEl.value
      const birthDate = newBirthDate.valueOf()
      saveUserInfo({ name, birthDate })

      this.setState(state => ({
        name,
        birthDate,
        headerEdit: false,
        invalidDate: false
      }))
    }
    else {
      this.setState(state => ({
        invalidDate: true
      }))
    }
  }

  getNumberOfDaysLeft = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear()
    const lastDayInDays = new Date(`${birthYear + 79}-12-31`).valueOf()/1000/3600/24
    const nowInDays = Date.now()/1000/3600/24
    return Math.floor(lastDayInDays - nowInDays)
  }

  render() {
    const numberOfDays = this.getNumberOfDaysLeft(this.state.birthDate)
    return (
      <div className="App">
        <Header 
          edit={this.state.headerEdit}
          invalidDate={this.state.invalidDate}
          onTextfieldClick={this.handleTextfieldClickInHeader}
          onEnterPress={this.handleEnterPressInHeader}
          addRefsToDOMElement={this.addRefsToDOMElement}
          name={this.state.name}
          birthDate={this.state.birthDate}
          numberOfDays={numberOfDays}
        />
        <Calendar 
          birthDate={this.state.birthDate}
        />
        <Footer 
          birthDate={this.state.birthDate}
          numberOfDays={numberOfDays}
        />
      </div>
    );
  }
}

export default App;
