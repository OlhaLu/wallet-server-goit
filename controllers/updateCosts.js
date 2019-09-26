const costsModel = require('../models/model-costs.js');

// обновление выбранного поля у объекта
const updateCosts = async (req, res) => {
  const costId = req.params.costId;
  const updatedData = req.body;

  try {
    const updatedCost = await costsModel.findByIdAndUpdate()(
      costId,
      {
        $set: updatedData,
      },
      {
        upsert: true,
      },
    );

    res.json({
      status: 'OK',
      cost: updatedCost,
    });
  } catch (error) {
    res.status(400).json({
      status: 'BAD',
      error: error,
      message: error.message,
    });
  }
};

module.exports = updateCosts;
