console.log('module 1')

let encapsulatedVariable = 'Xurupitas'

function sayHello(name = ''){
    console.log(`Hi ${name}`)
}

function getEncapsulateVar(){
    return encapsulatedVariable
}

//exposição dos metodos contidos no arquivo
module.exports = {
    sayHello,
    getEncapsulateVar,
    "name":"Module 1"
}