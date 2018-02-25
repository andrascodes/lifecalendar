import React from 'react';

import './Header.css'

import DisplayHeader from './DisplayHeader'
import EditHeader from './EditHeader'

const Header = (
  { name, numberOfDays, birthDate, edit, 
    onTextfieldClick, onEnterPress, addRefsToDOMElement, invalidDate }
) => {

  if(edit === false) {
    return (
      <div className="Header">
        <DisplayHeader 
          birthDate={birthDate}
          name={name}
          numberOfDays={numberOfDays}
          onTextfieldClick={onTextfieldClick}
        />
      </div>
    )
  }
  else {
    return (
      <div className="Header">
        <EditHeader
          name={name}
          birthDate={birthDate}
          onEnterPress={onEnterPress}
          addRefsToDOMElement={addRefsToDOMElement}
          invalidDate={invalidDate}
        />
      </div>
    )
  }
}

export default Header;