import React, { Component } from 'react'

import './EditHeader.css'

import 'muicss/dist/css/mui.css'

import { Input, Select, Option } from 'muicss/react'

class EditHeader extends Component {
  
  render() {
    const { name, birthDate, onEnterPress, addRefsToDOMElement, invalidDate } = this.props

    const birthDateObject = new Date(birthDate)
    const birthYear = birthDateObject.getFullYear()
    const birthMonth = birthDateObject.getMonth() + 1
    const birthDay = birthDateObject.getDate()

    return (
        <form className="EditHeader" onSubmit={onEnterPress}>
          <div className="nameInput">
            Hi,&nbsp;
            <Input 
              label="Name" floatingLabel={true} type="text" 
              required defaultValue={name}
              ref={addRefsToDOMElement('nameInput')}
            />
            !&nbsp;
          </div>
          <div>
            You were born on:&nbsp;
          </div>
          <div className="birthDayInput">
            <Input 
              name="year" label="Year" floatingLabel={true} type="number"
              required min="1939" max="2018" defaultValue={birthYear}
              ref={addRefsToDOMElement('yearInput')}
            />
            <Select 
              name="month" label="Month" defaultValue={birthMonth} 
              ref={addRefsToDOMElement('monthSelector')}
            >
              <Option value="1" label="January" />
              <Option value="2" label="February" />
              <Option value="3" label="March" />
              <Option value="4" label="April" />
              <Option value="5" label="May" />
              <Option value="6" label="June" />
              <Option value="7" label="July" />
              <Option value="8" label="August" />
              <Option value="9" label="September" />
              <Option value="10" label="October" />
              <Option value="11" label="November" />
              <Option value="12" label="December" />
            </Select>
            <Input 
              name="day" label="Day" floatingLabel={true} type="number" 
              required min="1" max="31" defaultValue={birthDay}
              ref={addRefsToDOMElement('dayInput')}
              invalid={invalidDate}
            />
          </div>
          <button type="submit" style={{ display: 'none' }}></button>
        </form>
    );
  }
  
}

export default EditHeader;