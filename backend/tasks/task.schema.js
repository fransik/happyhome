const Joi = require('joi');

const taskSchema = Joi.object().keys({ completed: Joi.boolean() });
const requiredTaskSchema = taskSchema.requiredKeys('completed');

module.exports = { taskSchema, requiredTaskSchema };
