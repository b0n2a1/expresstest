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

app.get('/twit/', searchparam, function(req,res){
	t.search(searchparam, function(err, data) {
	  if (err) {
	    console.log('Twitter search failed!');
	  } else {
	    console.log('Search results:');
	    console.dir(data);
		res.json(JSON.stringify(data));
	  }
	});
});

app.listen(process.env.PORT || 3000);



