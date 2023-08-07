const User = require('../../models/users');
const { HttpError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!email) {
    throw HttpError(400, 'Missing required field email');
  }

  if (!user) {
    throw HttpError(401, 'Email not found');
  }

  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }

  const verifyEmail = {
    to: email,
    subject: 'Confirm your registration',
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">
        Click verify email
      </a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    message: 'Verification email sent',
  });
};

module.exports = resendVerifyEmail;
