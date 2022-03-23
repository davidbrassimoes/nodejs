const http = require('http')
const url = require('url')
const { 2: port } = process.argv

const handleRequest = async (request, response) => {

    console.log('[info]', request.url)

    const parsedUrl = url.parse(request.url, true)

    switch (parsedUrl.pathname) {
        case '/': response.write('My index page')
            break
        case '/about': response.write('My about page')
            break
        case '/contacts': response.write('My contacts page')
            break
        default:
            response.write('404 Not found')
            response.write('404', 'Not Found')
    }

    response.end()
}

http.createServer(handleRequest).listen(port || 3000);
console.log('[info]', 'Server started at', `http://localhost:${port}`)