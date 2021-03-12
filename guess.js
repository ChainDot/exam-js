const guess = (userGuess, secret) => {
  if ( userGuess < secret){
  return 'Too small!'
 } else if ( userGuess > secret){
  return 'Too big!'
 } else {
  return "You win"
 }
}

console.log(guess(1,2))
console.log(guess(2,1))
console.log(guess(2,2))