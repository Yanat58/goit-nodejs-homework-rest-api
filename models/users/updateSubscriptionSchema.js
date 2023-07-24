const Joi = require('joi');

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().required(),
});

module.exports = updateSubscriptionSchema;
