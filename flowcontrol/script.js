// Control Flow 

console.log('a')
console.log('b')

    // if e else

let temperature = 36.4

/*if(temperature >= 37.5){
    console.log('febre')
}else if(temperature < 37.5 && temperature >=37){
    console.log('febre moderada!!!')
}else{
    console.log('saudavel!')
}*/

let highTemperature = temperature >=37.5
let mediumTemperature = temperature < 37.5 && temperature >=37

if(highTemperature){
    console.log('febre')
}else if(mediumTemperature){
    console.log('febre moderada!!!')
}else{
    console.log('saudavel!')
}

//switch
let expression = 'a'
switch(expression){

    case 'a':
        //codigo
        break

    case 'b':
        //codigo
        break

    default: 
        break
}

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')