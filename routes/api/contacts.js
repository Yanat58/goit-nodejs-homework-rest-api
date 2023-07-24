const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId, authentication } = require('../../middlewares');

const { addSchema, updateFavoriteSchema } = require('../../models/contacts');

const contactsRouter = express.Router();

contactsRouter.get('/', authentication, ctrl.listContacts);

contactsRouter.get('/:contactId', authentication, isValidId, ctrl.getContactById);

contactsRouter.post('/', authentication, validateBody(addSchema), ctrl.addContact);

contactsRouter.delete('/:contactId', authentication, isValidId, ctrl.removeContact);

contactsRouter.put(
  '/:contactId',
  authentication,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  '/:contactId/favorite',
  isValidId,
  authentication,
  validateBody(updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = contactsRouter;
