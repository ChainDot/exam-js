const average = (arrayNb) => {
  let sum = 0
  for (let i=0; i < arrayNb.length; ++i){
    sum += arrayNb[i] / arrayNb.length 
  }
  return sum
}
let arrayNb = [3,3,3]
console.log(average(arrayNb))