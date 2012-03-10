var express = require('express');
var fs = require('fs');
var util = require('util');
var http = require('http');

var app = express.createServer();
app.configure('development', function(){
	app.use(express.logger());
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req,res){
	var streamIn = fs.createReadStream(__dirname + '/public/index.html');
	util.pump(streamIn, res);
});

app.get('/twit/', function(req,res){
	var twitstream = getTweets();//"This is a json stream";
		
	res.json(twitstream);
});

function getTweets(){
	var request = http.request({
		host: "search.twitter.com",
		method: "GET",
		path: "/search.json?q=b0n2a1"
	})
	return request;
}



app.listen(process.env.PORT || 3000);



