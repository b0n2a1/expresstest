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
	writecontent(request, response);
});

function writecontent(request, response){
  response.send('Hello World!');
}

app.listen(process.env.PORT || 3000);



function getFile(localPath, mimeType, res){
	fs.readFile(localPath, function(err, contents){
		if(!err){
			res.writeHead(200,{
				"Content-Type": mimeType,
				"Content-Length": contents.length
			});
			res.end(contents);
		}else{
			res.writeHead(500);
			res.end();
		}
	});
}