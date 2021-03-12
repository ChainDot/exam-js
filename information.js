const information = (firstName, lastName, age) => {
if( age >= 18){
   return  `prenom: ${firstName}\nnom: ${lastName} \nage: ${age}\nvous êtes majeur depuis ${age - 18} ans`
   } else {
    return  `prenom: ${firstName}\nnom: ${lastName} \nage: ${age}\nvous serez majeur dans ${18 - age} ans`
   }
}

console.log(information('Sofiane', 'Akermoun', 39))
console.log(information('Alice', 'Liddell', 7))
