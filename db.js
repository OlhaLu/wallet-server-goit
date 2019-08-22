let MongoClient = require('mongodb').MongoClient;
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'wallet_server';

var state = {
  db: null,
};

exports.connect = function(urlMongodb, done) {
  if (state.db) return done();

  MongoClient.connect(urlMongodb, { useNewUrlParser: true,  useUnifiedTopology: true }, function(err, database) {
    if (err) return err;
    console.log("Connected server successfully");
    state.db = database.db(dbName);
    done();
  });
};

exports.get = function() {
  return state.db;
};

