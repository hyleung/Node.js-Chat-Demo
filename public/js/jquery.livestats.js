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
		self.client=new Faye.Client('http://' + window.location.hostname + ':8000/faye',{
			timeout:120
		});

	};
	
	this.init();
};

var liveStatsClient;
//create an instance of the LiveStatsClient when the document loads
jQuery(function(){
	liveStatsClient = new LiveStatsClient();
});