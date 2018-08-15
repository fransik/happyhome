const express = require('express');

const authProvider = require('./auth');
const authController = require('./auth/auth.controller');
const userController = require('./users/user.controller');

const router = express.Router();

authProvider.initialize(router);
router.use(express.json());
router.use('/auth', authController);
router.use('/users', userController);

module.exports = router;
