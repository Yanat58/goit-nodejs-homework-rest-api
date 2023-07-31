const validateBody = require('./validateBody');
const isValidId = require('./isValidid');
const authentication = require('./authenticate');
const upload = require('./upload');

module.exports = {
  validateBody,
  isValidId,
  authentication,
  upload,
};
