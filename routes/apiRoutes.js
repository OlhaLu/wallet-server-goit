const router = require('express').Router();
const costsRoutes = require('./costsRoutes.js');

router.use('/costs', costsRoutes);

module.exports = router;