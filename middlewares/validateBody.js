const AppError = require("../utils/appError");



const validateBody = (schema) => {
	const func = (req, res, next) => {
		if (!req.body || Object.keys(req.body).length === 0) {
			next(new AppError(400, "missing fields"));
		}
		const { error } = schema.validate(req.body);
		if (error) {
			next(new AppError(400, error.message));
		}
		next();
	};
	
	return func;
};

module.exports = {
	validateBody,
};