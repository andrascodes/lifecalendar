import React from 'react';

import './Header.css'

const Header = ({ name, numberOfDays }) => {

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
  }

  const formatNumberOfDays = numberOfDays => {
    const thousands = Math.floor(numberOfDays / 1000)
    const remainder = numberOfDays % 1000
    return `${thousands}.${remainder}`
  }

  return (
    <div className="Header">
      <h1>
        {`Hi, ${name}! 
          You have ${formatNumberOfDays(numberOfDays)} days left. 
          ${emojiMap(numberOfDays)}`
        }
      </h1>
    </div>
  );
};

export default Header;