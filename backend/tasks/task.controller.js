const express = require('express');

const templateService = require('./template.service');
const { requiredTemplateSchema } = require('./template.schema');
const validate = require('../validators');

const router = express.Router();

router.get('/templates', async (req, res, next) => {
  try {
    const templateList = await templateService.listAll();
    res.json(templateList);
  } catch (e) {
    next(e);
  }
});

router.post('/templates', async (req, res, next) => {
  try {
    const validBody = validate(req.body, requiredTemplateSchema);
    const template = await templateService.create(validBody);
    res.status(201).json(template);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
