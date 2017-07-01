//synchronous operation
function operation1(){
    setTimeout( () => console.log('Operation 1'), 1000)
}
function operation2(){
    console.log('Operation 2')
}
function operation3(){
    setTimeout( () => console.log('Operation 3'), 10)
}

operation1()
operation2()
operation3()


//notes
//executa retorna a função somente depois que a tarefa é realizada.