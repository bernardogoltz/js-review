console.log('teste teste teste')

console.log('9' + 5)
// string + number => converte coercitivamente um number para uma string


console.log(Number('9') + 5)
// converte para number arbitrariamente (explicit)

// manipulando string e numeros
// string em numero numero em string

let string = "1203"
console.log(Number(string))  //s2n

let number = 312
console.log(String(number)) // n2s


// Transormar um número quebrado com 2 casas ddecimais e trocar ponto por virgula

let numero = 412094.49201
console.log(numero.toFixed(2))
console.log(numero.toFixed(2).replace(".",",")) //toFixed(quant de casas decimais)


//upper to low and low to upper
let word = "Ber"
console.log(`${word}`)
console.log(word.toLowerCase())
console.log(word.toUpperCase())

//separando strings: 
let phrase = "love my wife"
let phraseArray = phrase.split(" ")

console.log(phrase)
console.log(phraseArray)

let phraseWithUnderscore = phraseArray.join("")
console.log(phraseWithUnderscore)

// verificar se um texto possui uma palavra expecifica

let phraseTest = "Pablo Pistola Ziebell"
console.log(phraseTest.includes("Pistola"))


// criar array com construtor: 
let arrayconstructor = new Array('a' , 'b' , 'c')
console.log(arrayconstructor)

//contar elementos de uma array: 
console.log(["a","b","c","d"].length)

//strings para arrays
let wordS2a = "manipulação"
console.log(Array.from(wordS2a))

//manipulando arrays
console.log("Manipulando arrays:")
let technologies = ["html","css","js"]
console.log(technologies)

    //adicionar item no fim
    technologies.push("nodejs")
    console.log(technologies)

    //adicionar no começo
    technologies.unshift("sql")
    console.log(technologies)

    //remover do fim: 
    technologies.pop()

    //remover do começo: 
    technologies.shift()

    //pegar somente alguns elementos: 0,1x,2x,3...
    technologies.slice(1,2)

    let index = technologies.indexOf('css')
    console.log(index)

    