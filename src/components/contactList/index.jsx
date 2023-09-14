import ContactItem from 'components/contactItem';
import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <ContactItem name={name} key={id} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
