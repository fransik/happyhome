const express = require('express');

const userService = require('./userService');
const { requiredUserSchema } = require('./userSchema');
const validate = require('../validators');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const userList = await userService.listAll();
    res.json(userList);
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const valid = validate(req.body, requiredUserSchema);
    const user = await userService.create(valid);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
