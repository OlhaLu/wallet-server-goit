const Costs = require('../models/model-costs');
const mongoose = require('mongoose');
const allCosts = '../all-costs.json';


// const costSchema = mongoose.Schema({
//   name: String,
//     description: String,
//     price: Number,
//     currency: String,
//     created: Number,
//     modified: Number,
//     categories: [Array]
// });

// const Costs = mongoose.model('Costs', costSchema);
 
// module.exports = Costs;

// сохранение одного товара/затрат в базу данных
exports.create = function (req, res) {
  var cost = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    created: req.body.created,
    modified: req.body.modified,
    categories: req.body.categories
  };
  Costs.create(cost, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(cost);
  })
};

// в ответе должны прийти все товары из базы данных
exports.all = function(req, res) {
  Costs.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

// получаем затрату из базы, найденную в базе по "_id"
exports.findById = function(req, res) {
  Costs.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

// обновление выбранного поля у объекта
exports.update = function(req, res) {
  Costs.update(req.params.id, { description: req.body.description }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

// удаление объекта по ID
exports.delete = function(req, res) {
  Costs.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
