import React from 'react';

import './Year.css'

const Year = ({ year, birthDate, isBirthYear, spent, current, left }) => {

  if(isBirthYear === true) {
    
    const birthYear = new Date(birthDate).getFullYear()
    const firstDayOfYear = new Date(`${birthYear}-01-01T00:00:00.000Z`).valueOf()
    const lastDayOfYear = new Date(`${birthYear}-12-31T23:59:59.000Z`).valueOf()
    
    const percentage = ((birthDate - firstDayOfYear)/(lastDayOfYear - firstDayOfYear)) * 100

    const titleStyle = {}
    if(percentage <= 50) {
      titleStyle.right = '1.4em'
    }
    else {
      titleStyle.left = '1.4em'
    }

    return (
      <div className="Year YearProgressContainer YearSpent">
        <div className="YearTitle" style={titleStyle}>
          {year}
        </div>
        <div className="YearNotAlive" style={{ width: `${percentage}%`, height: '100%' }}></div>
      </div>
    )
  }
  
  if(current === true) {
    
    const now = Date.now()
    const currentYear = new Date(now).getFullYear()
    const firstDayOfYear = new Date(`${currentYear}-01-01T00:00:00.000Z`).valueOf()
    const lastDayOfYear = new Date(`${currentYear}-12-31T23:59:59.000Z`).valueOf()

    const percentage = ((now - firstDayOfYear)/(lastDayOfYear - firstDayOfYear)) * 100

    const titleStyle = {}
    if(percentage <= 50) {
      titleStyle.right = '1.4em'
    }
    else {
      titleStyle.left = '1.4em'
    }

    return (
      <div className="Year YearProgressContainer YearLeft">
        <div className="YearTitle" style={titleStyle}>
          {year}
        </div>
        <div className="YearProgress" style={{ width: `${percentage}%`, height: '100%' }}></div>
      </div>
    )
  }

  if(spent === true) {
    return (
      <div className="Year YearSpent YearTitleContainer">
        <div className="YearTitle">
          {year}
        </div>
      </div>
    )
  }

  if(left === true) {
    return (
      <div className="Year YearLeft YearTitleContainer">
        <div className="YearTitle">
          {year}
        </div>
      </div>
    )
  }


};

export default Year;