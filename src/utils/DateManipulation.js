export const getToday = () => {
  const now = new Date(Date.now())
  const today = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
  return today.valueOf()
}