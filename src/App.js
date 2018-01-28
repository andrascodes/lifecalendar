import React, { Component } from 'react'
import './App.css'

import { DateManipulation } from './lib'

import { Calendar } from './components'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'András',
      birthDate: new Date('1992-10-25').valueOf(),
      lifeExpectancy: 94,
    }
  }

  render() {

    return (
      <div className="App">
        <div id="introText">
          <h1>
          {`${this.state.name}, 
            only ${DateManipulation.getWeeksRemaining(this.state.birthDate, this.state.lifeExpectancy)} weeks remain`}
          </h1>
        </div>
        <Calendar 
          birthYear={new Date(this.state.birthDate).getFullYear()}
          birthDate={this.state.birthDate}
          lifeExpectancy={this.state.lifeExpectancy}
        />
      </div>
    );
  }
}

export default App;
