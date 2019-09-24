const router = require('express').Router();
const costsController = require('../controllers/index.js');

router.post('/', costsController.createCosts);
router.get('/', costsController.getAllCosts);
router.get('/:id', costsController.getCostsById);
router.put('/:id', costsController.updateCosts);
router.delete('/:id', costsController.deleteCosts);

module.exports = router;