import React from 'react'

import { DateManipulation } from '../../lib'

import Year from './Year'

const Calendar = props => {

  const yearStrings = new Array(props.lifeExpectancy + 1).fill(0).map((value, index) => props.birthYear + index)

  return (
    <div id="Calendar">
      {
        yearStrings.map((yearString, index) => {
          if(index === 0) {
            return <Year 
                    key={yearString} 
                    year={yearString} 
                    beginning={true} 
                    weeks={DateManipulation.weeksInYear(props.birthDate)}
                    age={index}
                  />
          }
          else {
            return <Year key={yearString} year={yearString} age={index} />
          }
        })
      }
    </div>
  )
}

export default Calendar