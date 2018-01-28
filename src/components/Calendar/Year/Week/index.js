import React from 'react'

const Week = props => {
  
  const spent = ({ spent }) => {
    if(spent === true) {
      return 'spent'
    }
    else {
      return ''
    }
  }

  const hidden = ({ hidden }) => {
    if(hidden === true) {
      return 'hidden'
    }
    else {
      return ''
    }
  }

  return (
    <div className={`Week ${hidden(props)} ${spent(props)}`}></div>
  )
}

export default Week