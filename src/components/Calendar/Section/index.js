import React from 'react';

import './Section.css'

import Year from './Year'

const Section = ({ years, birthDate, lastYear }) => {

  const currentDate = Date.now()
  const birthYear = new Date(birthDate).getFullYear()
  const renderYears = (years, currentDate) => years.map((year, i) => {
    const yearProperties = {
      key: `year-${year}`,
      birthDate,
      year,
    }

    if(year === birthYear) {
      yearProperties.isBirthYear = true
    }
    
    const currentYear = new Date(currentDate).getFullYear()
    if(year < currentYear) {
      yearProperties.spent = true
    }
    else if(year === currentYear) {
      yearProperties.current = true
    }
    else {
      yearProperties.left = true
      if(i % 5 !== 0 && year !== lastYear) {
        yearProperties.showTitle = false
      }
      else {
        yearProperties.showTitle = true
      }
    }

    return (
      <Year {...yearProperties}/>
    )
  })

  return (
    <div className="Section">
      {
        renderYears(years, currentDate)
      }
    </div>
  );
};

export default Section;