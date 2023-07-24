const { HttpError } = require('../../helpers');
const { User } = require('../../models/users');

const subscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const subscriptionList = ['starter', 'pro', 'business'];

  if (!subscriptionList.includes(subscription)) {
    throw HttpError(400);
  }

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = subscription;
