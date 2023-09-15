import React from 'react';
import ContactTypography from './ContactTypography.styled';

const ContactItem = ({ name, id, number }) => {
  return (
    <ContactTypography key={id}>
      {name}: {number}
    </ContactTypography>
  );
};

export default ContactItem;
