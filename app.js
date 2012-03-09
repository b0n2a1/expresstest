var http = require("http"), 
	querystring = require("querystring"),
	path = require("path"), 
	fs = require("fs")
	extensions = {".html": "text/html",
	".css": "text/css",
	".js": "application/javascript",
	".png": "image/png",
	".gif": "image/gif",
	".jpg": "image/jpeg"
	};
var app = require('express').createServer();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(process.env.PORT || 3000);