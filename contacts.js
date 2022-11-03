const fs = require("fs/promises");
const path = require("path");
const objectid = require('objectid');

const contactsPath = path.resolve("db/contacts.json");


const listContacts = async () => {
  const result = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(result);
};

const getContactById = async (contactId) => {
  const contactsAll = await listContacts();
    const result = await contactsAll.find((contact) => contact.id === contactId);
    // если нет  id метод find вернет undefinde, для бека лучше возвращать null
    if (!result) {
        return null;
    }
    return result;
};

const removeContact = async (contactId) => {
    const contactsAll = await listContacts();
    // цей метод видалення об'єкту масиву покриє всі кейси (поверне null якщо не знайдено і т.д.)
    const index = contactsAll.findIndex(contact => contact.id === contactId);

    if (index === -1) {
        return null;
    }

    const result = contactsAll.splice(index, 1);
     // у JSON.stringify є параметри 1.що саме перетворити в JSON. 2. на що робимо заміну(у нас null), 3. форматування 2 пробіли
    await fs.writeFile(contactsPath, JSON.stringify(contactsAll, null, 2));
}

const addContact = async (name, email, phone) => {
    const contactsAll = await listContacts();
    contactsAll.push({ name, email, phone, id: objectid() })
    await fs.writeFile(contactsPath, JSON.stringify(contactsAll, null, 2));
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
