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

  render() {
    return (
      <div className="App">
        <Header />
        <Calendar 
          birthDate={this.state.birthDate}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
