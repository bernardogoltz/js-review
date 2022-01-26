/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

console.log("Teste teste")

let nota = 85.0
let notaConceito = "NotaConceito"


if(nota >=90){
    notaConceito = "A"
}else if(nota>=80 && nota<90){
    notaConceito = "B"
}else if(nota>=70 && nota<79){
    notaConceito = "C"
}else if(nota>=60 && nota<69){
    notaConceito = "D"
}else if(nota<60 && nota>=0){
    notaConceito = "F"
}else{
    notaConceito = "NotaInvalida"
}

console.log(notaConceito)