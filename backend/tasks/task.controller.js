const express = require('express');

const templateService = require('./template.service');
const validate = require('../validators');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const templateList = await templateService.listAll();
    res.json(templateList);
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const valid = validate(req.body, null);
    const template = await templateService.create(valid);
    res.status(201).json(template);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
