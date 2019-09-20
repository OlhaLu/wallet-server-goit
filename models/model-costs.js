const ObjectID = require('mongodb').ObjectID;
const db = require('../db');
const cost = require('../controllers/contr-costs.js')

exports.create = function(cost, cb) {
  db.get()
    .collection('costs')
    .insert(cost, function(err, result) {
      cb(err, result);
    });
};

exports.find = function(cb) {
  db.get()
    .collection('costs')
    .find()
    .toArray(function(err, docs) {
      cb(err, docs);
    });
};

exports.findById = function(id, cb) {
  db.get()
    .collection('costs')
    .findOne({ _id: ObjectID(id) }, function(err, doc) {
      cb(err, doc);
    });
};

exports.update = function(id, newData, cb) {
  db.get()
    .collection('costs')
    .updateOne({ _id: ObjectID(id) }, {$set: newData}, function(err, result) {
      cb(err, result);
    });
};

exports.remove = function(id, cb) {
  db.get()
    .collection('costs')
    .deleteOne({ _id: ObjectID(id) }, function(err, result) {
      cb(err, result);
    });
};
