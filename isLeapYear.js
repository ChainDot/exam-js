const isLeapYear = (nbYear) => {
  if((nbYear % 4 === 0 && nbYear % 100 !== 0) || (nbYear % 400 === 0)){
    return true
  } else {
    return false
  }
}

console.log(isLeapYear(2021))
console.log(isLeapYear(2024))
console.log(isLeapYear(2028))