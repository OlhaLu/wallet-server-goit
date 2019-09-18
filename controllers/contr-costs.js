const costsController = require('../models/model-costs');

// сохранение одного товара/затрат в базу данных
exports.create = function (req, res) {
  const cost = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    created: req.body.created,
    modified: req.body.modified,
    categories: req.body.categories
  };

  costsController.create(cost, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200).json().send(cost);
  })
};


// в ответе должны прийти все товары из базы данных
exports.find = function(req, res) {
  costsController.find(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200).json().send(docs);
  });
};

// получаем затрату из базы, найденную в базе по "_id"
exports.findById = function(req, res) {
  costsController.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200).json().send(doc);
  });
};

// обновление выбранного поля у объекта
exports.update = function(req, res) {
  costsController.update(req.params.id, { description: req.body.description }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

// удаление объекта по ID
exports.remove = function(req, res) {
  costsController.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

 

 