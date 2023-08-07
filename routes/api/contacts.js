const express = require('express')
// const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../models/contacts');
// const AppError = require('../../utils/appError');
// const { createUserDataValidator } = require('../../helpers/dataValidator');
// const catchAsync = require('../../utils/catchAsync');
const { ctrlContactList, cntrlGetContactById, cntrlDeleteContact, cntrlPutContact, cntrlAddContact } = require('../../controllers/controllers');
const { addContact } = require('../../models/contacts');
const { checkUserById } = require('../../middlewares/middlewares');
const { validateBody } = require('../../middlewares/validateBody');
const { createUserDataValidator } = require('../../helpers/dataValidator');
const { addSchema } = require('../../utils/userValidators');
const router = express.Router();

router.get('/', ctrlContactList)


router.get('/:contactId', checkUserById, cntrlGetContactById)

router.post('/', addContact)



router.delete('/:contactId', checkUserById, cntrlDeleteContact)

router.put('/:contactId', checkUserById, cntrlPutContact)




module.exports = router
