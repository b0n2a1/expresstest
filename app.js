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
	var twitstream = getTweets();
	//'{"completed_in":0.015,"max_id":177842183716601856,"max_id_str":"177842183716601856","page":1,"query":"b0n2a1","refresh_url":"?since_id=177842183716601856&q=b0n2a1","results":[{"created_at":"Thu, 08 Mar 2012 19:44:15 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":177842183716601856,"id_str":"177842183716601856","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:twitter.com&quot;&gt;web&lt;a&gt;","text":"RT @theresa_lauren: Happy International Womens Day! Theres a party in my uterus and the GOP isnt invited but they keep showing up anyway. Awkward.","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Thu, 08 Mar 2012 02:08:15 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":177576434842341376,"id_str":"177576434842341376","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:a0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;a&gt;","text":"RT @LOLGOP: New iPad now leading Mitt by 46% in Illinois.","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Wed, 07 Mar 2012 15:46:39 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":177420002402635776,"id_str":"177420002402635776","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:a0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:levelupstudio.complume&quot; rel=&quot;nofollow&quot;&gt;Plume\u00a0for\u00a0Android&lt;a&gt;","text":"RT @wilw: BREAKING NEWS : GIANT DOUCHEBAG defeats INSANE THEOCRAT in Ohio. BARACK OBAMA wins yet another GOP primary.","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Tue, 06 Mar 2012 20:12:06 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":177124417200078848,"id_str":"177124417200078848","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:a0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;a&gt;","text":"Three days of training. #shootmenow","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Tue, 06 Mar 2012 03:22:04 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176870235519983617,"id_str":"176870235519983617","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:a0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;a&gt;","text":"Getting ready to listen to Mary in the OC band concert.","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Tue, 06 Mar 2012 01:04:48 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176835688216543232,"id_str":"176835688216543232","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:a0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:si0.twimg.comprofile_images5722553572295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;a&gt;","text":"My new suiseki came todayhttp:t.coGnmirhfC","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Sun, 04 Mar 2012 01:18:02 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176114245241552896,"id_str":"176114245241552896","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:\/\/www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;\/a&gt;","text":"Time for dinner and dancing with my beautiful wife at winter club. #datenight","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Sat, 03 Mar 2012 23:36:15 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176088631495245825,"id_str":"176088631495245825","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:\/\/www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;\/a&gt;","text":"RT @WatchOnNetflix: Series 6 of Doctor Who is now streaming.","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Sat, 03 Mar 2012 19:43:24 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176030031506718720,"id_str":"176030031506718720","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:\/\/www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;\/a&gt;","text":"#breakfast","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Sat, 03 Mar 2012 18:04:39 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":176005178338705410,"id_str":"176005178338705410","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:\/\/www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;\/a&gt;","text":"At Mias\nhttp:\/\/t.co\/XtiywrRi","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null},{"created_at":"Sat, 03 Mar 2012 14:27:59 +0000","from_user":"b0n2a1","from_user_id":18277664,"from_user_id_str":"18277664","from_user_name":"b0n2a1","geo":null,"id":175950653041016832,"id_str":"175950653041016832","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/572255357\/2295479426_020ed550f7_normal.jpg","source":"&lt;a href=&quot;http:\/\/www.tweetdeck.com&quot; rel=&quot;nofollow&quot;&gt;TweetDeck&lt;\/a&gt;","text":"On our way to bellingham to see our daughter. #roadtrip","to_user":null,"to_user_id":null,"to_user_id_str":null,"to_user_name":null}],"results_per_page":15,"since_id":0,"since_id_str":"0"}';
	//getTweets();//"This is a json stream";
		
	res.json(twitstream);
});

var Twitter = (function(){
	var eventEmitter = new events.EventEmitter();
	return{
		EventEmitter : eventEmitter,
		latestTweet: 0
	};
})();

function getTweets(){
	var request = http.request({
		host: "search.twitter.com",
		method: "GET",
		path: "/search.json?q=b0n2a1"
	})
	return jSON.parse(request);
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



