/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
    receitas: [10 , 50 , 20 , 30],
    despesas: [20 , 30 , 5]
} //objeto que contém receitas e despesas da familia 

function somarReceitas(vetor){
    let somaTotal = 0

    for(let value of vetor){
        somaTotal += vetor
    }

    return somaTotal
}


/* função que soma todos os elementos dentro de um mesmo vetor, usada para somar todos os elementos dentro dos vetores que representam as receitas e despesas;*/

function calcularBalanco() {
    const somaGastos = somarReceitas(familia.receitas)
    const somaGanhos = somarReceitas(familia.despesas)
    
    const balancoFinal = somaGanhos - somaGastos
    
    console.log(somaGastos)
    console.log(familia.receitas)
    console.log(balancoFinal)

    const saldoPositivo = balancoFinal >= 0;
    
 
   if(saldoPositivo){
        console.log(`Saldo positivo de ${balancoFinal}`)
   }else{
        console.log(`Saldo negativo de ${balancoFinal}`)
   }
}


calcularBalanco()
