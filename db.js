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


// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(urlMongodb, { useNewUrlParser: true, useUnifiedTopology: true });
// const collection = client.db("wallet").collection("costs");

// collection.create({}, (err, result) => {
//   if (err) console.log(err);
//   if (result) console.log("insertOne: ", result);
// });

// collection.find({}, (err, result) => {
// if (err) console.log(err);
// if (result) console.log("findAll: ", result);
// });

// collection.findOne({}, (err, result) => {
// if (err) console.log(err);
// if (result) console.log("findOne: ", result);
// });

// collection.update({ _id: ObjectID(id) }, { $set: newData }, (err, result) => {
// if (err) console.log(err);
// if (result) console.log("insertOne: ", result);
// });

// collection.delete({ _id: ObjectID(id) }, (err, result) => {
//   if (err) console.log(err);
//   if (result) console.log("deleteOne: ", result);
//   });

// client.close();