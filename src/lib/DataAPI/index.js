const getLifeExpectancy = (fetch) => (gender, birthDateTimestamp, country) => {
  const birthDate = new Date(birthDateTimestamp)
  const birthDateString = `${birthDate.getFullYear()}-${birthDate.getMonth() + 1}-${birthDate.getDate()}`

  return fetch(`http://api.population.io/1.0/life-expectancy/total/${gender || 'male'}/${country || 'World'}/${birthDateString}`)
          .then(res => res.json())
}

const createDataAPI = (fetch) => {
  return {
    getLifeExpectancy: getLifeExpectancy(fetch)
  }
}

export default createDataAPI