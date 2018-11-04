const express = require('express');

const taskService = require('./task.service');
const { requiredTaskSchema } = require('./task.schema');
const templateService = require('./template.service');
const { requiredTemplateSchema } = require('./template.schema');
const idSchema = require('../validators/id.schema');
const validate = require('../validators');
const { needsAdmin } = require('../auth/auth.service');

const router = express.Router();

router.patch('/:id', async (req, res, next) => {
  try {
    const validId = validate({ param: req.params.id }, idSchema);
    const validBody = validate(req.body, requiredTaskSchema);
    const updatedTask = await taskService.update(
      validId.param,
      req.user.id,
      validBody
    );
    res.json(updatedTask);
  } catch (e) {
    next(e);
  }
});

router.get('/templates', async (req, res, next) => {
  try {
    const templateList = await templateService.listAll();
    res.json(templateList);
  } catch (e) {
    next(e);
  }
});

router.post('/templates', needsAdmin, async (req, res, next) => {
  try {
    const validBody = validate(req.body, requiredTemplateSchema);
    const template = await templateService.create(validBody);
    res.status(201).json(template);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
