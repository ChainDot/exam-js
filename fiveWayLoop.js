const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log(" //do while")

let i = 0
 do {
   console.log(`${tab[i]}, length: ${tab[i].length}`)
   i++ 
 } while (i < tab.length)

 i=0
 console.log(" //while")
 while(i < tab.length){
   console.log(`${tab[i]}, length: ${tab[i].length}`)
   ++i
 }