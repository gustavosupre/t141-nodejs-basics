const http = require('http')
const fs = require('fs')
const PORT = 8080

function requestHandler(request, response){
    console.log(request.url)
    fs.readFile('index.html', 'utf8', (error, fileContent) => {
        response.setHeader("Content-Type", "text/html")
        response.end(fileContent)
    })
}

const server = http.createServer(requestHandler)
server.listen(PORT, (error) => {
    if (error) throw error
    console.log('Server up at http://localhost:' + PORT)
})

//note
//mais no repositorio nodejs-http-server
//(https://github.com/gustavosupre/nodejs-http-server)

//instalar aplicação now para rodar a aplicação pela internet
//$ npm instal -g now