const express = require('express');
const router = express.Router();

const testController = require('../controllers/test');

/* GET users listing. */
router.get('/first', testController.first);
router.get('/second', testController.second);
router.get('/third', testController.third);
router.get('/fourth', testController.fourth);
router.get('/fifth', testController.fifth);

module.exports = router;
