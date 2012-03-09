var express = require('express');
var fs = require('fs');
var util = require('util');

var app = express.createServer();
app.configure('development', function(){
	app.use(express.logger());
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req,res){
	var streamIn = fs.createReadStream(__dirname + '/public/index.html');
	util.pump(streamIn, res);
});



app.listen(process.env.PORT || 3000);



