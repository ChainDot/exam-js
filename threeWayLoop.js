const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log(" //for loop")
for (let i = 0 ; i < tab.length; ++i ){
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}
console.log("// for-of loop")
for ( let elem of tab){
  console.log(`${elem}, length: ${elem.length}`)
}
console.log("// forEach loop")
tab.forEach (elem => console.log(`${elem}, length: ${elem.length}`))