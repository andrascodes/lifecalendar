import React from 'react';

import './Calendar.css'

import Section from './Section'

const Calendar = ({ birthDate }) => {
  
  const birthYear = new Date(birthDate).getFullYear()
  const lastYear = birthYear + 79

  const renderSections = (birthYear) => {
    return (
      [new Array(20), new Array(20), new Array(20), new Array(20)]
        .map((section, i) => section.fill(0).map((x, j) => birthYear + i * 20 + j))
        .map((section, i) => (
          <Section key={`section-${i}`} years={section} birthDate={birthDate} lastYear={lastYear}/>
        ))
    )
  }

  return (
    <div className="Calendar">
      {
        renderSections(birthYear)
      }
    </div>
  );
};

export default Calendar;