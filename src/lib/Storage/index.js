const load = () => {

  let name = window.localStorage.getItem('name')
  const birthDate = window.localStorage.getItem('birthDate')
  const lifeExpectancy = window.localStorage.getItem('lifeExpectancy')

  if(name === 'undefined') {
    name = undefined
  }

  if(name === null || birthDate === null || lifeExpectancy === null) {
    return {
      name: undefined,
      birthDate: undefined,
      lifeExpectancy: undefined
    }
  }
  else {
    
    return {
      name,
      birthDate: Number(birthDate),
      lifeExpectancy: Number(lifeExpectancy)
    }
  }
}

const save = ({ name, birthDate, lifeExpectancy }) => {

  window.localStorage.setItem('name', name)
  window.localStorage.setItem('birthDate', birthDate)
  window.localStorage.setItem('lifeExpectancy', lifeExpectancy)

  return true
}

export default {
  load,
  save
}