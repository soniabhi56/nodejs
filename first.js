var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);  

var request = require("request");
	request("http://www.google.com",function(error,response,body)
	{
		console.log(response);
	});