import React from 'react';

const ContactItem = ({ name, id, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

export default ContactItem;
