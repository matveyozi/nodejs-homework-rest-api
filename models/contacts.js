const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const contactsListPath = path.join(__dirname, './contacts.json')

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsListPath));
}

const getContactById = async (contactId) => {
  const list = await listContacts();
  return list.find(item => item.id === contactId);
}

const removeContact = async (contactId) => {
  const list = await listContacts();
  const updateList = list.filter(item => item.id !== contactId)
  await fs.writeFile(contactsListPath, JSON.stringify(updateList, null, 2));
  return;
}

const addContact = async (body) => {
  const list = await listContacts();
  const newContact = {
    ...body,
    id: uuidv4()
  }
  list.push(newContact);

  await fs.writeFile(contactsListPath, JSON.stringify(list, null, 2));
  return newContact;
}

const updateContact = async (contactId, body) => {
  const list = await listContacts();
  const indexUpdateContact = list.findIndex(item => item.id === contactId);

  list[indexUpdateContact] = { id: contactId, ...body };
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
