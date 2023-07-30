const { ctrlWrapper } = require('../../helpers');

const getCurrent = require('./getCurrent');

const logout = require('./logout');

const subscription = require('./subscription');

const updateAvatar = require('./updateAvatar');

module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  subscription: ctrlWrapper(subscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
