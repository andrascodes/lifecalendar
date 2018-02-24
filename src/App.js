import React, { Component } from 'react';

import './App.css';

import { Header, Calendar, Footer } from './components'

class App extends Component {
  constructor() {
    super()

    this.state = {
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
    return (
      <div className="App">
        <Header 
          name={'András'}
          numberOfDays={this.getNumberOfDaysLeft(this.state.birthDate)}
        />
        <Calendar 
          birthDate={this.state.birthDate}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
