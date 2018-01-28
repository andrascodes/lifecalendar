import React from 'react'

import { DateManipulation } from '../../../lib'

import Week from './Week'

const Year = props => {

  const createWeekArray = ({ year, beginning, weeks }) => {
    if(beginning === true) {
      return new Array(52 - weeks).fill(0).map((value, index) => ({
        id: `${year}:${index}`,
        year,
        week: index + 1,
        hidden: true,
      }))
      .concat(
        new Array(weeks).fill(0).map((value, index) => ({
          id: `${year}:${(52 - weeks) + index}`,
          year,
          week: (52 - weeks) + index + 1,
        }))
      )
    }
    else {
      return new Array(52).fill(0).map((value, index) => ({
        id: `${year}:${index}`,
        year,
        week: index + 1,
      }))
    }
  }

  const weeks = createWeekArray(props).map(week => {
    week.spent = DateManipulation.isWeekBeforeNow(week.year, week.week)
    return week
  })

  return (
    <div className="Year">
      <div className="YearTitle">{props.year}</div>
      <div className="WeeksContainer">
        {
          weeks.map(week => {
            return (
              <Week key={week.id} hidden={week.hidden} spent={week.spent} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Year