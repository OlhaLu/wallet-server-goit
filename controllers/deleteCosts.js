const costsModel = require('../models/model-costs.js');

// удаление объекта по ID
const deleteCosts = async (req, res) => {
  const costId = req.params.costId;
  try {
    const deletedCost = await costsModel.findByIdAndDelete(costId);
    res.json({
      status: 'OK',
      deletedCost: deletedCost,
    });
  } catch (error) {
    res.status(400).json({
      status: 'BAD',
      error: error,
      message: error.message,
    });
  }
};

module.exports = deleteCosts;
