const CONST = 15

const square1 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

const square2 = [
  [2, 7, 6, 1],
  [9, 5, 1, 6],
  [4, 3, 8, 3],
  [1, 1, 1, 1],
]


 const isMagicSquare = (square) => {
 
//
let diagSum1 = 0
 for(let i=0; i < square.length; i++){
   diagSum1 += square[i][i]
 }

let diagSum2 = 0
for(let i=0; i < square.length; i++){
   diagSum2 += square[i][square.length-i-1]
 }

 if(diagSum1 !== diagSum2){
   return false
 }
 



for(let i = 0; i< square.length; i++){
  let rowSum = 0 
  for(let j = 0 ; j < square[i].length; j++){
    rowSum += square[i][j]
  }
  if(diagSum1 !== rowSum){
  return false
 }
}



for(let i = 0; i< square.length; i++){
  let columnSum = 0 
  for(let j = 0 ; j < square[i].length; j++){
    columnSum += square[j][i]
  }
  if(columnSum !== diagSum1 ){
  return false
 }

}

return true
}

console.log(isMagicSquare(square1))
console.log(isMagicSquare(square2))