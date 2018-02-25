import React from 'react';

import './Footer.css'

import { getToday } from '../../utils/DateManipulation'

const Footer = ({ numberOfDays, birthDate }) => {

  if(birthDate === getToday()) {
    return (
      <div className="Footer">
        <h1>
          {`Tip: Click the number of days in the header to set your details. `}
          <span role="img" aria-label="" aria-labelledby="">😉</span>
        </h1>
      </div>
    )
  }
  else {
    return (
      <div className="Footer">
        <h1>
          {`Make'em count! `}
          <span role="img" aria-label="" aria-labelledby="">😉</span>
        </h1>
      </div>
    )
  }
}

export default Footer;