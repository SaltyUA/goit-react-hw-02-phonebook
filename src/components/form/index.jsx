import React from 'react';
import FormFlex from './Form.styled';

const Form = ({ handleChange, handleSubmit, nameValue, telValue }) => {
  return (
    <FormFlex onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={nameValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        value={telValue}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </FormFlex>
  );
};

export default Form;
