const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')

//setup
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

//Subscriber API
app.use('/api/subscribers', require('./subscriberApi'))

//separar as rotas por arquivos APIs - exemplo abaixo
//app.use('/api/products', require('./productsApi'))


app.get('/about', (request, response) => {
    response.send('This is a express application')
})

//server startup
app.listen(port, () => {
    console.log(`Server starter at http://${host}:${port}`)
})

console.log(host, port)