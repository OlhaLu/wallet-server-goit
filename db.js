var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'CostsWallet';

var state = {
  db: null,
};

exports.connect = function(urlMongodb, done) {
  if (state.db) return done();

  MongoClient.connect(urlMongodb, { useNewUrlParser: true }, function(err, database) {
    // assert.equal(null, err);
    if (err) return err;
    console.log("Connected successfully to server");

    state.db = database.db(dbName);
    // client.close();
    done();
  });
};

exports.get = function() {
  return state.db;
};

