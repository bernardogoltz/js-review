/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

let choice = 1

function convertTemperature(choice, temperature){

 
    switch(choice){

        case '1':
            let celsius = 0.0
            celsius = (temperature-32)*(5/9)
            
    
        case '2':
            let fahrenheit = 0.0
            fahrenheit = temperature * 9 /(5+32)
            
    
        default: 
            
    }

}

   

