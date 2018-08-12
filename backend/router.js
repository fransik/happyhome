const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./users/userController');

const router = express.Router();

router.use(bodyParser.json());
router.use('/users', userController);

module.exports = router;
