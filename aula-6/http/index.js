const http = require('http')
const { 2: port } = process.argv

const server = http.createServer((request, response) => {
    console.log(request.url)

    response.write('Hello, World!')
    response.write('Another line in body')
    response.end('ok')
})

server.listen(port || 3000)