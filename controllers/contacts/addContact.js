const { Contact } = require('../../models');

// const body = req.body

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
