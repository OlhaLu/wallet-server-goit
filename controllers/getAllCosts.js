const costsModel = require('../models/model-costs.js');

// в ответе должны прийти все товары из базы данных
const getAllCosts = async (req, res) => {
  try {
    const findAllCosts = await costsModel.find({}, { __v: 0 });

    res.json({
      status: 'OK',
      costs: findAllCosts,
    });
  } catch (error) {
    res.status(400).json({
      status: 'BAD',
      error: error,
      message: error.message,
    });
  }
};

module.exports = getAllCosts;
