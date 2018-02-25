export const saveUserInfo = ({ name, birthDate }) => {
  localStorage.setItem('name', name)
  localStorage.setItem('birthDate', birthDate)
  return true
}

export const loadUserInfo = () => {

  const name = localStorage.getItem('name')
  const birthDateString = localStorage.getItem('birthDate')

  if(birthDateString === null) {
    return {
      name, 
      birthDate: undefined
    }
  }
  else {
    return {
      name,
      birthDate: Number(birthDateString)
    }
  }
}