const express = require('express')
const router = express.Router()

let db = [
    {id:1, name: "Gustavo Araujo", email: "gustavocaraujo@gmail.com"},
    {id:2, name: "Edy Segura", email: "edy@inatel.com.br"},
    {id:3, name: "Lidy Segura", email: "lidysegura@gmail.com.br"},
    {id:4, name: "Leandro ", email: "leandro@gmail.com.br"},
]

router.get('/', (request, response) => {
    response.json(db)
})

module.exports = router