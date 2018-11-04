const express = require('express');

const userService = require('./user.service');
const { requiredUserSchema } = require('./user.schema');
const validate = require('../validators');
const { needsAdmin } = require('../auth/auth.service');

const router = express.Router();

router.get('/', needsAdmin, async (req, res, next) => {
  try {
    const userList = await userService.listAll();
    res.json(userList);
  } catch (e) {
    next(e);
  }
});

router.get('/me', (req, res) => {
  res.json(req.user);
});

router.post('/', needsAdmin, async (req, res, next) => {
  try {
    const validBody = validate(req.body, requiredUserSchema);
    const user = await userService.create(validBody);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
