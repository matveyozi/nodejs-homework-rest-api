const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../models/contacts');
const AppError = require('../utils/appError');
const { createUserDataValidator } = require('../helpers/dataValidator');
const catchAsync = require('../utils/catchAsync');



const ctrlContactList = async (req, res, next) => {
	const contacts = await listContacts();
	res.status(200).json(contacts)
}

const cntrlGetContactById = async (req, res, next) => {
	
	res.status(200).json(req.contact);
	return;

}

const cntrlDeleteContact = async (req, res, next) => {
	


	await removeContact(req.contact.id);

	res.status(200).json({ message: 'contact delete' });
}

const cntrlPutContact = catchAsync(async (req, res, next) => {

	if (Object.keys(req.body).length === 0) {
		res.status(400).json({
			message: 'missing fields'
		})
		return
	}

	const { error, value } = createUserDataValidator(req.body);
	if (error) {
		return next(new AppError(400, error));
	}



	const contactId = req.body;



	const putContact = await updateContact(req.contact.id, req.body);
	res.status(200).json(putContact)


})


const cntrlAddContact = async (req, res, next) => {

	const result = await addContact(req.body);
	res.status(201).json(result);
};


module.exports = {
	ctrlContactList,
	cntrlGetContactById,
	cntrlDeleteContact,
	cntrlPutContact,
	cntrlAddContact
}