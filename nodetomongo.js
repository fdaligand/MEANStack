var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection to url 
var url = 'mongodb://localhost:27017/example';

// use connect methode to connect to server 
mongoClient.connect(url, function(err,db) {
	assert.equal(null,err);
	console.log("connected succesfully to server")
});

