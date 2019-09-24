const MongoClient = require('mongodb').MongoClient;
const dbName = 'wallet';

let state = {
  db: null,
};

exports.connect = (urlMongodb, done) => {
  if (state.db) return done();

  MongoClient.connect(
    urlMongodb,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
 
    function(err, database) {
      if (err) return done(err);
      console.log('Connected server successfully');
      state.db = database.db(dbName);
      done();
    },
  );
};

exports.get = function() {
  return state.db;
};