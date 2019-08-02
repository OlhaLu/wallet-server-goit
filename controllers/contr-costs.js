var Costs = require('../models/model-costs');

exports.all = function(req, res) {
  Costs.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findById = function(req, res) {
  Costs.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.create = function(req, res) {
  var cost = {
    name: req.body.name,
  };
  Costs.create(cost, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(cost);
  });
};

exports.update = function(req, res) {
  Costs.update(req.params.id, { name: req.body.name }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = function(req, res) {
  Costs.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
