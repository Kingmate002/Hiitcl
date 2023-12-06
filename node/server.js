const http = require('http')

//create server
const server = http.createServer((req, res) => {
    console.log('Request made')
    // set Header
    res.setHeader('content-Type', 'text/plain')
    console.log(req.url)
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.write('Homepage')
            res.end()
            break;
        case '/about':
            res.writeHead(200)
            res.write('About us')
            res.end()
            break;
        case '/contact':
            res.writeHead(200)
            res.write('Contact')
            res.end()
            break;
        case '/terms':
            res.writeHead(200)
            res.write('Terms')
            res.end()
            break;
        default:
            res.writeHead(404)
            res.write('404 page')
            res.end()
    }
})

// to listen to requests
server.listen(3000, "localhost", () => {
    console.log("Listening on PORT 3000")
})