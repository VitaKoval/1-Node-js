const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

// TODO: задокументировать каждую функцию
// --------------- чтение файла --------------------
// fs.readFile('data.json', 'utf-8', (err, content) => {}
// );
// --------------- запись файла --------------------
// fs.writeFile('data.json2', JSON.stringify({name: 'Ivan'}), (err, content) => {
// console.log(err)
// });
function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("listContacts", data);
  });
}
// listContacts();

function getContactById(contactId) {
  
}


function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
