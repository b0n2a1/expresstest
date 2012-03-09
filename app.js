var express = require('express');
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
var app = express.createServer(express.logger());

	app.get(function(req, res) { 
		var filename = path.basename(req.url) || "index.html", 
		ext = path.extname(filename),
		dir = path.dirname(req.url).substring(1),
		localPath = __dirname + "/public/";
		if (extensions[ext]) { 
			localPath += (dir ? dir + "/" : "") + filename; 
			path.exists(localPath, function(exists) { 
					if (exists) { 
						getFile(localPath, extensions[ext], res); 
					} else { 
						res.writeHead(500); res.end(); } 
					}); 
				} 
				});

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

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});