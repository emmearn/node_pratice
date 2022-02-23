const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;
// export PORT=8000 -> echo $PORT or set PORT=8000 -> echo %PORT% 

const server = http.createServer((request, response) => {
    if (request.method != 'GET') {
        response.statusCode = 403;
        response.end();
    }
    const routing = {
        '/': 'index.html',
        '/home': htmlFile = 'index.html',
        '/contacts': htmlFile = 'contacts.html'
    }

    response.setHeader('Content-Type', 'text/html');
    render(routing[request.url], response);
});

function render(routing, response) {
    fs.stat(`./${routing}`, (err, stats) => {
        if (stats) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            fs.createReadStream(routing).pipe(response);
        } else {
            response.statusCode = 404;
            response.end("Not found!");
        }
    });
}

server.listen(port);