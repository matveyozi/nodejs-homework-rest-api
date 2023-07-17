const Joi = require('joi');

createUserDataValidator = (data) =>
	Joi.object()
		.options({ abortEarly: false })
		.keys({
			name: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required(),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
		phone: Joi.number().required(),
		})
		.validate(data);


module.exports = createUserDataValidator
