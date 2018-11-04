const Joi = require('joi');

const userSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string().min(8),
  active: Joi.boolean(),
  role: Joi.only('user', 'admin')
});

const requiredUserSchema = userSchema.requiredKeys('email', 'password');

module.exports = { userSchema, requiredUserSchema };
