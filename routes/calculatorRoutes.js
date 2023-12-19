const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// GET calculator page
router.get('/', (req, res) => {
  res.render('calculator', { title: "Calculator" });
});

// GET request for calculation
router.get('/calculate', calculatorController.calculator);

module.exports = router;
