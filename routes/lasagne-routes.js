const express = require('express');
const router = express.Router();

// Importing Routes
const { index, create } = require('../controllers/lasagne-controller');

// Here we are going to create routes.
router.get('/', index)
router.post('/create', express.json(), create)





module.exports = router;