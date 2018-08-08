const router = require('express').Router();

const users = require('./users');

router.post('/users', users.create);
router.get('/users', users.listAll);

module.exports = router;
