const Joi = require('joi');

const templateSchema = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  active: Joi.boolean()
});

const requiredTemplateSchema = templateSchema.requiredKeys(
  'name',
  'description'
);

module.exports = { templateSchema, requiredTemplateSchema };
