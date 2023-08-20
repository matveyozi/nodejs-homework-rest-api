const { ctrlWrapper } = require("../../helpers/ctrlWrapper");
const { add } = require("./addContact");
const { remove } = require("./deleteContact");
const { getAll } = require("./getAll");
const { getById } = require("./getContactBYid");
const { update } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  getById: ctrlWrapper(getById),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
