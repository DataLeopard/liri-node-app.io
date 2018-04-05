require("dotenv").config();
var twitter = require("twitter");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var client = new Twitter({
  consumer_key: '0WXUhNVIRWyjt8NDq2ROammnD',
  consumer_secret: 'klsQRAkDuuQrOjrTaohtp8nm9V9xOuSStkQqGOPiNIfW1GJhoU',
  access_token_key: '3310314061-MkWy8nsZ7HJSPRsgu5bw6kAtc5OmCBJhGoYHVTN',
  access_token_secret: 'K3ain4xVDXvrdor1kOctCqvSrQYpPX5VwAjqGSX6ijgix'
});
 
var params = {screen_name: '#alanburkehou'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var myTweets = function() {
    var params = {
      q: '#alanburkehou, #alanburkehou',
      result_type: 'recent',
      lang: 'en', 
    }} 
    myTweets()
    
   
client.get('statuses/user_timeline', {screen_name: handle}, function(error, tweets, response){
  if (!error) {
    apitite.done(tweets); // return the tweets to the API user
  } else {
   console.error('An error occurred!'); //error handling
  }
});