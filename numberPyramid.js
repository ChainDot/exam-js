const numberPyramid = (nb) => {
  let res = (nb).toString()
  for (let i= 0; i<= nb; ++i){
    res += res.repeat(i)
    if(i <= nb) {
      res += '\n'
    }
  }
  return res
}

console.log(numberPyramid(2))

