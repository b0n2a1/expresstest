var twitter = require('ntwitter');
var credentials = require('./credentials.js');
var express = require('express');
var fs = require('fs');
var util = require('util');
var http = require('http');

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

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
	//return JSON.parse(request);
//	var options = {
//		host: "search.twitter.com",
//		method: "GET",
//		path: "/search.json?q=b0n2a1"	
	}
	
	var req = http.get(options, function(res){
		console.log('status:' + res.statusCode);
		console.log('headers:' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (chunk){
			console.log('BODY:' + chunk);
		});
	});
	req.write('data\n');
	req.write('data\n');
	req.end();

});

function getTweets(){
	var request = http.request({
		host: "http://search.twitter.com",
		method: "GET",
		path: "/search.json?q=b0n2a1"
	})
	return JSON.parse(request);	
}

app.listen(process.env.PORT || 3000);



