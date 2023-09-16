import React, { Component } from 'react';
import FormFlex from './FormFlex.styled';
import LabelTypography from './LabelTypography.styled';
import Input from './Input.styled';
import SubmitButton from './SubmitButton.styled';
import FormWrap from './FormWrap.style';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let isExist;
    this.props.contacts.forEach(contact => {
      if (contact.name === this.state.name) {
        isExist = true;
      }
    });
    if (!isExist) {
      this.props.onSubmit({ ...this.state });
      this.reset();
    } else {
      window.alert(`${this.state.name} is already in contacts`);
    }
  };

  reset = () => {
    this.setState(() => ({ name: '', number: '' }));
  };

  render() {
    return (
      <FormFlex onSubmit={this.handleSubmit}>
        <FormWrap>
          <LabelTypography htmlFor="name">Name</LabelTypography>
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormWrap>
        <FormWrap>
          <LabelTypography htmlFor="number">Number</LabelTypography>
          <Input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormWrap>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormFlex>
    );
  }
}

export default Form;
