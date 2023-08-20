const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({
    message: "contact deleted",
  });
};

module.exports = {
  remove,
};
