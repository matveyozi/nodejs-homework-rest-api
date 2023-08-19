const { validateBody } = require("../middlewares/validateBody");
const { isValidId } = require("../middlewares/isValidId");
const { validateBodyStatus } = require("../middlewares/validateBodyStatus");
const { authenticate } = require("./authenticate");

module.exports = {
  validateBody,
  isValidId,
  validateBodyStatus,
  authenticate,
};
