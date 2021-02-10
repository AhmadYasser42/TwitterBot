module.exports={

	//Enter the names of all the subreddits you want the bot to tweet images from. Returns a random subreddit name
	randomSubreddit : function(){

		var subreddits = ['aesthetic', 'grungeaesthetic', 'SkyPorn', 'EarthPorn', 'landscape'];

		return subreddits[Math.floor(Math.random() * subreddits.length)];
	}
}
