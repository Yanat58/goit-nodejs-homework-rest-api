const User = require('./userSchema');
const loginSchema = require('./loginSchema');
const registerSchema = require('./registerSchema');
const updateSubscriptionSchema = require('./updateSubscriptionSchema');
const emailSchema = require('./emailSchema');

module.exports = {
  User,
  loginSchema,
  registerSchema,
  updateSubscriptionSchema,
  emailSchema,
};
