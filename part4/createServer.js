const http = require('node:http')

const server = http.createServer(function(req, res){
    console.log('I got an incoming request');

    res.writeHead(200, {'content-type': 'application/json'});
    res.end('Thanks for visiting my server :) ')
});

server.listen(8000, function(){
    console.log(`Http server is listening on port 8000`);
    
})