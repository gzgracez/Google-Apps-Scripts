function addCompanyToGroup() {
  var group = ContactsApp.getContactGroup('GroupName');
  var contacts = group.getContacts();
  for (var i = 0; i < contacts.length; i++) {
    contacts[i].addCompany('Company', 'Title');
    //Logger.log(contacts[i].getFullName());
  }
}

function setCompanyPosition() {
  var group = ContactsApp.getContactGroup('GroupName');
  var contacts = group.getContacts();
  for (var i = 0; i < contacts.length; i++) {
    var temp = contacts[i].getCompanies()[0];
    //temp.setCompanyName("Company");
    temp.setJobTitle("Title");
    //Logger.log(contacts[i].getFullName());
  }
}
