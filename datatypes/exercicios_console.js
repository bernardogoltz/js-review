// 1. Declare uma variável de nome weight: 
//let weight

// 2. Que tipo de dado é a variável acima. 
//console.log(typeof weight)

/*
    3. Declare uma variavel e atribua valores para cada um dos dados: 
        name, age, stars (number), isSubscribed (BOOLEAN);

    let name "Bernardo"
    let age = 18
    let stars = 4.99
    let isSubscribed = true
*/

let student = {
    name: "Bernardo",
    age: 18,
    stars:5.0,
    isSubscribed: true,
}

console.log(typeof student)
console.log(`O estudante ${student.name} tem ${student.age} anos de idade e ${student.stars}/5 pontos no site. `)

/*
5. Criar um array vazio chamdo students 
*/
let students = []

// 6. Reatribua os valores do objeto para o array. 
students = [
    student
]

console.log(students)

//7. Print do objeto: 
console.log(students[0])

/*8. Crie um novo student e coloque na posição 1 do Array students: */

const estudanteGmilanesi = {
    name: "Guilherme Milanesi Lopes",
    age: 20,
    stars:3,
    isSubscribed: false,
}

students = [ 
    student, 
    estudanteGmilanesi
]

console.log(students[1])

// 9 . console.log(a)
// var a =  1
// A variável "a" vai sofrer hoisting e vai receber o valor de undefined. 

