const Joi = require('joi');

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({ message: 'missing field favorite' }),
});

module.exports = updateFavoriteSchema;
