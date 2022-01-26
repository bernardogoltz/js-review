    
    // Expressions *-* 

/*
    new 
        left hand side expression
        serve para criar um novo objeto
*/

let name = new String('Bernardo')
let age = new Number(18)

console.log(name,age)

let date = new Date('2022-01-27')
console.log(date)
console.log(date.__proto__)


/* 
    Operadores unários
        typeof
        delete
*/

const person = { 
    namePerson: 'Bergudo',
    age: 40
}

delete person.age

console.log(person)


/*  
    Operadores aritmeticos
        multiplicacao (*)
        divisao (/)
        soma (+)
        subtração (-)

        resto da divisão (%)
        incremento (++)
        decremento (--)
        exponencial (**) ~ ^MORAL
*/


//grouping operator
let total  = (2+4)*5
console.log(total)

// operadres de comparação
// compararm valores e retornam um boolean!!!


/*
comparadores >= , <= , < , >
*/

//ASSIGNMENT operadores de atribuição
let x 
console.log(x)

//simple assignment
x = 1

//addition assignment
x += 2

//subtraction assignment
x -= 2

//division assignment
x /= 2

//multiplication assignment
x *= 2

//remander and exponential
x **= 2
x %= 2

// operadores lógicos
        // and &&
        // or || 
        // not !

//precedência: 

/*

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 

*/