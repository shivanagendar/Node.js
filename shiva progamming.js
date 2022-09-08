var http = require('http');
http.creatServer(function(req, res){
res.writeHead(200,{'content-Type':'text/html'})
res.end("welcome to Node Js");
}).listen(3000);
console.log("Sever is listen on http://127.0.0.1:3000"); 