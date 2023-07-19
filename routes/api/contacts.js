const express = require('express')
const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../models/contacts');
const AppError = require('../../utils/appError');
const { createUserDataValidator } = require('../../helpers/dataValidator');
const catchAsync = require('../../utils/catchAsync');

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json(contacts)
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.status(200).json(contact);
})

router.post('/', addContact)

// router.post('/', catchAsync(async (req, res, next) => {

//   const { error, value } = createUserDataValidator(req.body);

//   if (error) return next(new AppError(400, error));
//   // if (error) return res.status(400).json(error);

//   const newContact = await addContact(req.body);

//   res.status(201).json(newContact);
// }))

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  const contactById = await getContactById(contactId);

  if (!contactById) {
    res.status(404).json({ meesage: 'Not found...' })
    return
  }

  await removeContact(contactId);

  res.status(200).json({ message: 'contact delete' });
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      message: 'missing fields'
    })
    return
  }

  const putContact = await updateContact(contactId, req.body);

  res.status(200).json(putContact)
})



// router.get('/', listContacts)


module.exports = router
