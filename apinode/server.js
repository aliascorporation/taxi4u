var bodyParser 			= require('body-parser');
var express 			= require('express');
var fs 					= require('fs');
var path 				= require('path');

var app = express();

// Configure Express application
app.use(bodyParser.json()); // Define parser for json request
app.use(bodyParser.urlencoded({
	extended: false
})); // Define parser for form request

var protocol = require('http');
var server = protocol.createServer(app);

var apiRouter = require('./app/routes/api.js')(app);

//Webserver launcher
server.listen(3000, function() {
	console.log('Server HTTP on port %d launched', server.address().port);
});

