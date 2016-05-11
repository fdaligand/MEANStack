var mongoClient = require('mongodb').MongoClient;
var co = require('co');
var assert = require('assert');


var url = 'mongodb://localhost:27017/example';

co(function*() {
    // conection to url  
    var db = yield MongoClient.connect(url);
    console.log("connected succesfully to server")

    // Insert a single doc 
    var r = yield db.colection('inserts').insertOne({a:1});
    assert.equal(1, r.inseredCount);

    // Insert multiple documents 
    var r = yield db.collections('inserts').insertMany([{a:2},{a:3}]);
    assert.equal(2,r.insertedCount);

    //Close connection 
    db.close()
}).catch( function(err) {
	console.log(err.stack);
});


