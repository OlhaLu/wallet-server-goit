var MongoClient = require('mongodb').MongoClient;

var state = {
  db: null,
};

exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) {
      return done; // убрала (err)
    }
    state.db = db;
    done();
  });
};

exports.get = function() {
  return state.db;
};
