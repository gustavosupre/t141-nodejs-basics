const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')

//setup
const app = express()
app.use(bodyParser.json())
//app.use(express.static('public'))

//publish HTML5 app
app.get('/', (request, response) => {
    let subscriper = [{
        "name": "Gustavo Araujo",
        "email": "gustavocaraujo@gmail.com"
    },{
        "name": "Edy Segura",
        "email": "Edy@inatel.br"
    }]
    response.json(subscriper)
})

app.get('/about', (request, response) => {
    response.send('This is a express application')
})

//server startup
app.listen(port, () => {
    console.log(`Server starter at http://${host}:${port}`)
})

console.log(host, port)