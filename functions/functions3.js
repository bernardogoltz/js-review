const sumFailed = function (number1 , number2){
    let result = number1 + number2
    console.log(result)
} 

const sum = function (number1 , number2){
    let result = number1 + number2
    return result
} 


let number1 = 345
let number2 = 55

sum(number1,number2)

console.log(`O numero 1 eh ${number1}`)
console.log(`O numero 2 eh ${number2}`)

console.log(`A soma é ${sumFailed(number1,number2)}`)
//undefined

console.log(`A soma é ${sum(number1,number2)}`)
//undefined

//function expression f. anonymous
