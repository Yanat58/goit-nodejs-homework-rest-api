const { ctrlWrapper } = require('../../helpers');

const listContacts = require('./listContacts');
const addContact = require('./addContact');
const getContactById = require('./getContactById');
const updateContact = require('./updateContact');
const updateFavorite = require('./updateFavorite');
const removeContact = require('./removeContact');

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  removeContact: ctrlWrapper(removeContact),
};
