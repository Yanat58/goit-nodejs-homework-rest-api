const Joi = require('joi');

const emailRegexp = /^(([a-zA-Z]{1}[-0-9A-z_-]{1,20}[0-9A-Za-z]?)@([a-zA-Z]{1,})\.[a-zA-Z]{2,})$/;

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = emailSchema;
