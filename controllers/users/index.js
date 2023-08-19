const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const { register } = require("./registerUser");
const { login } = require("./loginUser");
const { getCurrent } = require("./currentUser");
const { logout } = require("./logoutUser");
const { updateSubscription } = require("./updateSubscription");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
