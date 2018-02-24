import React, { Component } from 'react';

import './App.css';

import { Header, Calendar, Footer } from './components'

class App extends Component {
  constructor() {
    super()

    this.state = {
      birthYear: 1992
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Calendar 
          birthYear={this.state.birthYear}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
