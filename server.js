require.paths.unshift(__dirname + "/vendor");

//add listener for uncaught exceptions
process.addListener('uncaughtException',function(err,stack) {
	console.log('----------------------------');
  console.log('ExceptionL ' + err);
	console.log(err.stack);
	console.log('----------------------------');

});

var LiveStats = require('./lib/livestats');

new LiveStats({
  port: 8000,
  geoipServer: {
      hostname: 'geoip.peepcode.com'
    , port: 80
  }
});