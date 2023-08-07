const { getContactById } = require('../models/contacts');
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync');

const checkUserById = catchAsync(async (req, res, next) => {
	const { contactId } = req.params;

	const contactById = await getContactById(contactId);

	if (!contactById) return next(new AppError(404, 'Not found'));

	req.contact = contactById;

	next();

})



module.exports = {
	checkUserById
}