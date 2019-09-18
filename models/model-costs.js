const ObjectID = require('mongodb').ObjectID;
const db = require('../db');

exports.create = function(costs, cb) {
  db.get()
    .collections('costs')
    .insert(costs, function(err, result) {
      cb(err, result);
    });
};

exports.find = function(cb) {
  db.get()
    .collections('costs')
    .find()
    .toArray(function(err, docs) {
      cb(err, docs);
    });
};

exports.findById = function(id, cb) {
  db.get()
    .collections('costs')
    .findOne({ _id: ObjectID(id) }, function(err, doc) {
      cb(err, doc);
    });
};

exports.update = function(id, newData, cb) {
  db.get()
    .collections('costs')
    .updateOne({ _id: ObjectID(id) }, {$set: newData}, function(err, result) {
      cb(err, result);
    });
};

exports.remove = function(id, cb) {
  db.get()
    .collections('costs')
    .deleteOne({ _id: ObjectID(id) }, function(err, result) {
      cb(err, result);
    });
};
