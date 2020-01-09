const express = require('express');
const router = express.Router();

// The below makes the /lasagne as the route then connects it to the file.
router.use('/lasagne', require('./lasagne-routes'));

module.exports = router;