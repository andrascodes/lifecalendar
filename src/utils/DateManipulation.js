export const getToday = () => {
  const now = new Date(Date.now())
  return new Date(formatDate({
    year: now.getFullYear(), 
    month: now.getMonth() + 1, 
    day: now.getDate()
  })).valueOf()
}

export const formatDate = ({ year, month, day }) => {
  const date = {
    year: `${Number(year)}`,
    month: Number(month), 
    day: Number(day), 
  }

  if(date.month < 10) {
    date.month = `0${date.month}`
  }
  else {
    date.month = `${date.month}`
  }

  if(date.day < 10) {
    date.day = `0${date.day}`
  }
  else {
    date.day = `${date.day}`
  }

  return `${date.year}-${date.month}-${date.day}`
}