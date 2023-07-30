const path = require('path');
const Jimp = require('jimp');

const { User } = require('../../models/users');
const { HttpError } = require('../../helpers');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const newAvatarName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, newAvatarName);

  await Jimp.read(tempUpload)
    .then(avatar => {
      return avatar.resize(250, 250).quality(60).write(resultUpload);
    })
    .catch(error => {
      throw HttpError(400, error.message);
    });

  const avatarURL = path.join('avatars', newAvatarName);
  const result = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  if (!result) {
    throw HttpError(401);
  }

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
