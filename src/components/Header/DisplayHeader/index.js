import React from 'react';

import './DisplayHeader.css'

const DisplayHeader = ({ name, birthDate, numberOfDays, onTextfieldClick }) => {

  const emojiMap = (days) => {
    if(days >= 25800) {
      return `🕐`;
    }
    else if(days >= 24400) {
      return `🕑`;
    }
    else if(days >= 21900) {
      return `🕒`;
    }
    else if(days >= 19500) {
      return `🕓`;
    }
    else if(days >= 17200) {
      return `🕔`;
    }
    else if(days >= 14700) {
      return `🕕`;
    }
    else if(days >= 12300) {
      return `🕖`;
    }
    else if(days >= 9900) {
      return `🕗`;
    }
    else if(days >= 7500) {
      return `🕘`;
    }
    else if(days >= 5000) {
      return `🕙`;
    }
    else if(days >= 2700) {
      return `🕚`;
    }
    else if(days >= 280) {
      return `🕛`;
    }
    else {
      return `🕛`;
    }
  }

  const getTimeleftMessage = numberOfDays => {
    
    if(birthDate > Date.now()) {
      return (
        <span className="TimeLeftMessage">
          This is your <span className="HeaderTime">future</span>.
        </span>
      )
    }
    else if(numberOfDays <= 0) {
      return (
        <span className="TimeLeftMessage">
          This is your <span className="HeaderTime">past</span>.
        </span>
      )
    }
    else {
      const formatDays = (numberOfDays) => {
        const numberOfDaysStr = `${numberOfDays}`
        if(numberOfDaysStr.length > 4) {
          const thousands = numberOfDaysStr.substring(0, numberOfDaysStr.length - 3)
          const remainder = numberOfDaysStr.substring(numberOfDaysStr.length - 3)
          return `${thousands} ${remainder}`
        }
        else {
          return numberOfDaysStr
        }
      }

      return (
        <span className="TimeLeftMessage">
          You have&nbsp;
          <span className="HeaderTime" onClick={onTextfieldClick}>
            {formatDays(numberOfDays)} days
          </span>
          &nbsp;left.
        </span>
      )
    }
  }

  return (
    <h1>
      Hi,&nbsp;
      <span className="HeaderName" onClick={onTextfieldClick}>
        {name}
      </span>
      !&nbsp;{getTimeleftMessage(numberOfDays)}&nbsp;
      <span role="img" aria-label="" aria-labelledby="">{`${emojiMap(numberOfDays)}`}</span>
    </h1>
  )
}

export default DisplayHeader;