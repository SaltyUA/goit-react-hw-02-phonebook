import React from 'react';
import ContactTypography from './ContactTypography.styled';

const ContactItem = ({ name, id, number, handleDelete }) => {
  return (
    <ContactTypography key={id}>
      {name}: {number}
      <button onClick={() => handleDelete(id)} type="button">
        Delete
      </button>
    </ContactTypography>
  );
};

export default ContactItem;
