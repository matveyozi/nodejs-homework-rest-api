const express = require('express')
const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../models/contacts')

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

router.post('/', async (req, res, next) => {
  const newContact = await addContact(req.body);

  res.status(201).json(newContact)
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  await removeContact(contactId);
  
  res.json({ message: 'contact delete' });
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  const putContact = await updateContact(contactId, req.body);

  res.status(200).json(putContact)
})

module.exports = router
