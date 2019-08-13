var http = require('http');

http.createServer(function (require, response) {
    response.writeHead(200, { 'content-text': 'text/html'});
    response.write('Hello, world!!');
    response.end();
}).listen(8889);

console.log('server running at http://localhost:8889');