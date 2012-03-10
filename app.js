var util = require("util"),
	http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs"),
	events = require("events");
	
function load_static_file(uri, response){
	var filename = path.join(process.cwd(),uri);
	path.exists(filename, function(exists){
		if(!exists){
			response.sendHeader(404,{"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.close();
			return;
		}
		
		fs.readFile(filename, "binary", function(err, file){
			if(err){
				response.sendHeader(500, {"Content-Type": "text/plain"});
				response.write(err + "\n");
				response.close();
				return;
			}
			
			response.sendHeader(200);
			response.write(file,"binary");
			response.close();
		});
	});
}

var twitter_client = http.createClient(80, "api.twitter.com");

var tweet_emitter = new events.EventEmitter();

function get_tweets(){
	var request = twitter_client.request("GET", "/1/statuses/public_timeline.json", {"host": "api.twitter.com"});
	
	request.addListener("response",function(response){
		var body = "";
		response.addListener("data",function(data){
			body += data;
		});
		
		response.addListener("end", function(){
			var tweets = JSON.parse(body);
			if(tweets.length > 0){
				tweet_emitter.emit("tweets",tweets);
			}
		});		
	});
	request.close();
}

setInterval(get_tweets,5000);

http.createServer(function(request, response){
	var uri = url.parse(request.url).pathname;
	if(uri === "/stream"){
		
		var listener = tweet_emitter.addListener("tweets", function(tweets){
			response.sendHeader(200, {"Conent-Type": "text/plain"});
			response.write(JSON.stringify([]));
			response.close();
			
			clearTimeout(timeout);
		});
		
		var timeout = setTimeout(function(){
			response.sendHeader(200, {"Conent-Type": "text/plain"});
			response.write(JSON.stringify([]));
			response.close();
			
			tweet_emitter.removeListener(listener);
		}, 10000);
		
	}
	else{
		load_static_file(uri, response);
	}
}).listen(process.env.PORT || 3000);

util.puts("Server running tweet test.");