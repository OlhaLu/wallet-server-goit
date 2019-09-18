const MongoClient = require('mongodb').MongoClient;
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/costs?retryWrites=true&w=majority';
const dbName = 'costs';

let state = {
  db: null,
};

exports.connect = function(done) {
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

