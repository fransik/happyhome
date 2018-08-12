const express = require('express');

const userService = require('./userService');

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
  const { body } = req;
  try {
    const user = await userService.create(body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
