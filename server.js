const http = require('http');
const server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('Ok');
});
server.listen(3000);
console.log('Server on. localhost:3000');