import React, { Component } from 'react';

import './App.css';

import { Header, Calendar, Footer } from './components'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: 'there',
      birthDate: new Date('1992-10-25').valueOf()
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
          name={this.state.name}
          numberOfDays={numberOfDays}
        />
        <Calendar 
          birthDate={this.state.birthDate}
        />
        <Footer 
          numberOfDays={numberOfDays}
        />
      </div>
    );
  }
}

export default App;
