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
//	var twitstream = JSON.stringify(getTweets());
//	//getTweets();//"This is a json stream";		
//	res.json(twitstream);
	
//	var request = http.request({
//		host: "search.twitter.com",
//		method: "GET",
//		path: "/search.json?q=b0n2a1"
//	})
	//return JSON.parse(request);
	var options = {
		host: "search.twitter.com",
		method: "GET",
		path: "/search.json?q=b0n2a1"	
	}
	
	var req = http.request(options, function(res){
		console.log('status:' + res.statusCode);
		console.log('headers:' + JSON.sringify(res.headers));
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



