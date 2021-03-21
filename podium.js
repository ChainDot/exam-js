let array = [2, 3, 1, 25, 50, 23, 75]

const podium = (array) => {
  let res = []
  array.sort((a,b) => {
    return b - a
  }).slice(0,3)
  res += `1st: ${array[0]}\n2nd: ${array[1]}\n3nd: ${array[2]}`
  return res
}

console.log(podium(array))