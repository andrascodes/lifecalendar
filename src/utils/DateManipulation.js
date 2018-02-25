export const getToday = () => {
  const now = new Date(Date.now())
  const thisMonth = now.getMonth()
  if(thisMonth < 10) {
    return new Date(`${now.getFullYear()}-0${thisMonth + 1}-${now.getDate()}`).valueOf()
  }
  else {
    return new Date(`${now.getFullYear()}-${thisMonth + 1}-${now.getDate()}`).valueOf()
  }
}