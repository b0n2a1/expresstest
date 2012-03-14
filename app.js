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

//	t.stream(
//	    'statuses/filter',
//	    { track: ['@b0n2a1', '@szich', '@darrylhan','bonsai','wow'] },
//	    function(stream) {
//	        stream.on('data', function(tweet) {
//	            console.log(tweet.text);
//				response.write(JSON.stringify(tweet.text));
//	        });
//	    }
//	);

t.search('nodejs OR #node', function(err, data) {
  if (err) {
    console.log('Twitter search failed!');
  }
  else {
    console.log('Search results:');
    console.dir(data);
  }
});


