// const MongoClient = require('mongodb').MongoClient;
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/wallet?retryWrites=true&w=majority';
const mongoose = require("mongoose");
const dbName = 'wallet';

let state = {
  db: null,
};

exports.connect = function(done) {
  if (state.db) return done();
  mongoose.connect(urlMongodb, { useNewUrlParser: true,  useUnifiedTopology: true }, function(err, database) {
    if (err) return err;
    console.log("Connected server successfully");
    state.db = database.db(dbName);
    done();
  });
};

exports.get = function() {
  return state.db;
};

