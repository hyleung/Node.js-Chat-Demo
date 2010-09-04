//jquery.livestats.js
function LiveStatsClient () {
	if(!(this instanceof arguments.callee)){
		return new arguments.callee(arguments);
	}
	var self=this;
	this.init = function(){
		//call a function to setup a new Faye client
		self.setupBayeuxHandlers();
	};
	
	this.setupBayeuxHandlers = function(){
		//hard-coding the url, but will use config.json later
		self.client=new Faye.Client('http://localhost:8000/faye',{
			timeout:120
		});
		//setup a path to subscribe to events at
		self.client.subscribe('/stat',function(message) {
			console.log('MESSAGE',message);
		});
	};
	
	this.init();
};

var liveStatsClient;
jQuery(function(){
	liveStatsClient = new LiveStatsClient();
});