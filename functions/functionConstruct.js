function Person(name) {
    this.name = name 
    this.walk = function(){
        return this.name + "is walking"
    }
}

const bernardo = new Person("Bernardo")
const joao = new Person("João")

console.log(joao)
console.log(bernardo)

console.log(joao.walk())

