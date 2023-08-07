const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../../helpers');

const nameRegexp = /^[a-zA-Zа-яА-Я0-9_-]{2,16}[ ]?([a-zA-Zа-яА-Я0-9_-]{2,16})?$/;
// const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailRegexp = /^(([a-zA-Z]{1}[-0-9A-z_-]{1,20}[0-9A-Za-z]?)@([a-zA-Z]{1,})\.[a-zA-Z]{2,})$/;

const subscriptionList = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    token: {
      type: String,
      default: '',
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: 'starter',
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = User;
