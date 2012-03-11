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
	var twitstream = JSON.stringify(getTweets());
	//getTweets();//"This is a json stream";
		
	res.json(twitstream);
});

//var Twitter = (function(){
//	var eventEmitter = new events.EventEmitter();
//	return{
//		EventEmitter : eventEmitter,
//		latestTweet: 0
//	};
//})();

function getTweets(){
	var request = http.request({
		host: "search.twitter.com",
		method: "GET",
		path: "/search.json?q=b0n2a1"
	})
	return JSON.parse(request);
//	.on("response", function(response){
//		var body = "";
//		response.on("data", function(data){
//			body += data;
//			try{
//				var tweets = jSON.parse(body);
//				if(tweets.results.length > 0){
//					Twitter.latestTweet = tweets.max_id_str;
//					Twitter.EventEmitter.emit("tweets",tweets);
//				}
//				catch (ex){
//					console.log("Waiting for more data chunks");
//				}
//			}
//		});
//	});
	
}

app.listen(process.env.PORT || 3000);



