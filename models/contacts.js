const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const contactsListPath = path.join(__dirname, './contacts.json')
const { createUserDataValidator } = require('../helpers/dataValidator');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsListPath));
}

const getContactById = async (contactId) => {
  const list = await listContacts();
  return list.find(item => item.id === contactId);
}

const removeContact = async (contactId) => {
  const list = await listContacts();

  const contactById = await getContactById(contactId);

  if (!contactById) {
    return null;
  }
  const updateList = list.filter(item => item.id !== contactId)

  await fs.writeFile(contactsListPath, JSON.stringify(updateList, null, 2));
  return

}

const addContact = catchAsync(async (req, res, next) => {

  const { error, value } = createUserDataValidator(req.body);

  if (error) return next(new AppError(400, error));

  const list = await listContacts();
  const newContact = {
    ...value,
    id: uuidv4()
  }
  list.push(newContact);

  await fs.writeFile(contactsListPath, JSON.stringify(list, null, 2));

  res.status(201).json(newContact)

  // return newContact;
})

const updateContact = async (contactId, body) => {
  const list = await listContacts();
  const indexUpdateContact = list.findIndex(item => item.id === contactId);
  const contact = await getContactById(contactId);
  list[indexUpdateContact] = { ...contact, ...body };
  await fs.writeFile(contactsListPath, JSON.stringify(list, null, 2));

  return {
    ...list[indexUpdateContact]
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
