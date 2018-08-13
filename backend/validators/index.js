const Joi = require('joi');

const { ValidationError } = require('../error');

module.exports = (toValidate, schema) => {
  const { error, value } = Joi.validate(toValidate, schema, {
    abortEarly: false
  });

  if (error) {
    throw new ValidationError(error.details);
  }

  return value;
};
