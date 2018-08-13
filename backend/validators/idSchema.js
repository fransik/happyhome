const Joi = require('joi');

module.exports = Joi.object().keys({
  param: Joi.string()
    .alphanum()
    .required()
});
