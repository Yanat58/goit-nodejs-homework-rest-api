const { Contact } = require('../../models/contacts');

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(
    !favorite
      ? ({ owner },
        {
          skip,
          limit: +limit,
        })
      : { owner, favorite }
  ).populate('owner', 'email');

  res.status(200).json(result);
};

module.exports = listContacts;
