const http = require('http');
const nodeStatic = require('node-static');

const port = 3000;

const file = new nodeStatic.Server('./public', {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
});

// https://github.com/cloudhead/node-static
http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log(`Server running http://127.0.0.1:${ port }`);