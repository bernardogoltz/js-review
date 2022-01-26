let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
//valor recebido no Let

console.log(createThink(subject)) 
//sempre será study, valor passado dentro da função createThink

// FUNCTION HOISTING

sayMyName()
//anonymousSayMyName()

function sayMyName() {
    console.log('Bergas')
}

/*

    reference error: 

    const anonymousSayMyName = function(){
        console.log('Bergolino Lopes')
        }

*/

//arrow function

const sayMyNameArrowTest = (name) => {
    console.log(name)
}

sayMyNameArrowTest('Bernardo Ivo Goltz')

//callback funtion

function sayMyNameCallback(name){
    console.log(name)
}

sayMyNameCallback(
    () => console.log('Tharsilo Callback')
)

