const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const nameRegexp = /^[a-zA-Zа-яА-Я0-9_-]{2,16}[ ]?([a-zA-Zа-яА-Я0-9_-]{2,16})$/;
const emailRegexp = /^(([a-zA-Z]{1}[-0-9A-z_-]{1,20}[0-9A-Za-z]?)@([a-zA-Z]{1,})\.[a-zA-Z]{2,})$/;
const phoneRegexp = /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

contactSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean(),
});

const Contact = model('contact', contactSchema);
const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {
  Contact,
  schemas,
};
