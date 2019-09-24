const costsModel = require('../models/model-costs.js');

// получаем затрату из базы, найденную в базе по "_id"
const getCostsById = async (req, res) => {
  const costsId = req.params.costsId;
  try {
    const findCosts = await costsModel.findById(costsId, { __v: 0 });

    res.json({
      status: 'OK',
      user: findCosts,
    });
  } catch (error) {
    res.status(400).json({
      status: 'BAD',
      error: error,
      message: error.message,
    });
  }
};

module.exports = getCostsById;
