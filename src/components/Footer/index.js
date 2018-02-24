import React from 'react';

import './Footer.css'

const Footer = ({ numberOfDays, birthDate }) => {

  if(birthDate > Date.now()) {
    return (
      <div className="Footer">
        <h1>It's gonna be a great one! 😉</h1>
      </div>
    )
  }
  else if(numberOfDays <= 0) {
    return (
      <div className="Footer">
        <h1>What a great life! 😲</h1>
      </div>
    )
  }
  else {
    return (
      <div className="Footer">
        <h1>Make'em count! 😉</h1>
      </div>
    )
  }
}

export default Footer;