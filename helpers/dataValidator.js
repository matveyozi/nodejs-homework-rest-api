const Joi = require('joi');

const createUserDataValidator = (data) =>
	Joi.object()
		.options({ abortEarly: false })
		.keys({
			name: Joi.string()

				.min(3)
				.max(30)
				.required()
				.messages({
					"any.required": 'missing required name field'
				}),
			email: Joi.string()
				.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'ua', 'org'] } })
				.required()
				.messages({
					"any.required": 'missing required email field'
				}
				),
			phone: Joi.number()
				.required()
				.messages({
					"any.required": 'missing required phone field'
				}
				),
		})
		.validate(data);

const updateContactValidator = (data) => {
	Joi.object()
	.options()
}


module.exports = { createUserDataValidator } 
