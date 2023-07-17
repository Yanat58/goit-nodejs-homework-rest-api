const Joi = require('joi');

const nameRegexp = /^[a-zA-Zа-яА-Я0-9_-]{2,16}[ ]?([a-zA-Zа-яА-Я0-9_-]{2,16})?$/;
const emailRegexp = /^(([a-zA-Z]{1}[-0-9A-z_-]{1,20}[0-9A-Za-z]?)@([a-zA-Z]{1,})\.[a-zA-Z]{2,})$/;
const phoneRegexp = /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

const addSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean(),
});

module.exports = addSchema;
