const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../../helpers');

const nameRegexp = /^[a-zA-Zа-яА-Я0-9_-]{2,16}[ ]?([a-zA-Zа-яА-Я0-9_-]{2,16})?$/;
const emailRegexp = /^(([a-zA-Z]{1}[-0-9A-z_-]{1,20}[0-9A-Za-z]?)@([a-zA-Z]{1,})\.[a-zA-Z]{2,})$/;
// const phoneRegexp = /^(\+?(\d{1,3})\))?[-. ]?(\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{2}[- ]?\d{2}$/;

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
      // match: phoneRegexp,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

module.exports = Contact;
