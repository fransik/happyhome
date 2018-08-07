const router = require('express').Router();

const users = require('./users');

router.get('/users', users.listAll);

module.exports = router;
