import React from 'react';

import './Header.css'

const Header = ({ name, numberOfDays, birthDate }) => {

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
      return 'This is your future.'
    }
    else if(numberOfDays <= 0) {
      return 'This is your past.'
    }
    else {
      const thousands = Math.floor((numberOfDays / 1000))
      const remainder = numberOfDays % 1000
      return `You have ${thousands} ${remainder} days left.`
    }
  }

  return (
    <div className="Header">
      <h1>
        {
          `Hi, ${name}! ${getTimeleftMessage(numberOfDays)} ${emojiMap(numberOfDays)}`
        }
      </h1>
    </div>
  );
};

export default Header;