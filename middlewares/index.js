const { validateBody } = require("../middlewares/validateBody");
const { isValidId } = require("../middlewares/isValidId");
const { validateBodyStatus } = require("../middlewares/validateBodyStatus");
const { authenticate } = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateBody,
  isValidId,
  validateBodyStatus,
  authenticate,
  upload,
};
