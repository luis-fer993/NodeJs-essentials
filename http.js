const http = require('http');
 
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    console.log(req);
    if (req.url === '/lol') {
        res.setHeader('Content-Type', 'text/html');
        res.end('Hello World');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }

});

server.listen(3000);
    


