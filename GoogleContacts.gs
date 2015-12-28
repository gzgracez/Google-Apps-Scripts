function main (){ 
  // addCompanyToGroup("groupName", "company", "title");
  setCompanyNameAndPosition("groupName", "company", "title");
}

function addCompanyToGroup(groupName, company, title) {
  var group = ContactsApp.getContactGroup(groupName);
  var contacts = group.getContacts();
  for (var i = 0; i < contacts.length; i++) {
    contacts[i].addCompany(company, title);
    //Logger.log(contacts[i].getFullName());
  }
}

function setCompanyPosition(groupName, title) {
  var group = ContactsApp.getContactGroup(groupName);
  var contacts = group.getContacts();
  for (var i = 0; i < contacts.length; i++) {
    var temp = contacts[i].getCompanies()[0];
    temp.setJobTitle(title);
  }
}

function setCompanyNameAndPosition(groupName, company, title) {
  var group = ContactsApp.getContactGroup(groupName);
  var contacts = group.getContacts();
  for (var i = 0; i < contacts.length; i++) {
    var temp = contacts[i].getCompanies()[0];
    temp.setCompanyName(company);
    temp.setJobTitle(title);
  }
}
