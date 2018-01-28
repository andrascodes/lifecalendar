const weeksInYear = (timestamp) => {
  const year = new Date(timestamp).getFullYear()
  const beginningOfYearTimestamp = new Date(year, 0, 1).valueOf()
  return 52 - Math.floor(((timestamp - beginningOfYearTimestamp)/1000/3600/24/7))
}

const isWeekBeforeNow = (year, week) => {
  const currentYear = new Date(Date.now()).getFullYear()
  const currentWeek = 52 - weeksInYear(Date.now())
  if(Number(year) < Number(currentYear)) {
    return true
  }
  else if(Number(year) === Number(currentYear) && week <= currentWeek) {
    return true
  }
  else {
    return false
  }
}

const getWeeksRemaining = (birthTimestamp, lifeExpectancy) => {
  const birthYear = new Date(birthTimestamp).getFullYear()
  const lastYear = birthYear + lifeExpectancy
  const currentYear = new Date(Date.now()).getFullYear()
  
  return ((lastYear - currentYear) * 52) + weeksInYear(Date.now())

}

export default {
  weeksInYear,
  isWeekBeforeNow,
  getWeeksRemaining
}