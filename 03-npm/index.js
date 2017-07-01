//criar o package JSON via git BASH: $ npm init
// instalar package npm do site via git BASH: $ npm install "nome do modulo" --save
//file .gitignore na raiz - para nao commitar alguma pasta
    //dar um $git status e ver a pasta a ser ignorada no commit na lista dos arquivos

//iniciando o arquivo

const string = require('useful-string')
const _ = require('lodash')


_.times(4, () => {
    console.log("id: " + string.guid())
})
