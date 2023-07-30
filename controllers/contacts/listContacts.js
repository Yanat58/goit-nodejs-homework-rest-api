const { Contact } = require('../../models/contacts');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(
    !favorite
      ? ({ owner: _id },
        {
          skip,
          limit: +limit,
        })
      : { owner: _id, favorite }
  ).populate('owner', 'email');

  res.status(200).json(result);
};

module.exports = listContacts;
