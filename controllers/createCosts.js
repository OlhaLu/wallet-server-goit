const costsModel = require('../models/model-costs.js');

// сохранение одного товара/затрат в базу данных
const createCosts = async (req, res) => {
  const newCostData = req.body;

  try {
    const newCost = await new costsModel(newCostData);

    newCost.save((err, result) => {
      res.json({
        status: 'OK',
        cost: result,
      });
    });
    
  } catch (error) {
    res.status(400).json({
      status: 'BAD',
      error: error,
      message: error.message,
    });
  }
};

module.exports = createCosts;
