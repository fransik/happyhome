const Joi = require('joi');

module.exports = Joi.object().keys({
  startsAt: Joi.date(),
  endsAt: Joi.date()
});
