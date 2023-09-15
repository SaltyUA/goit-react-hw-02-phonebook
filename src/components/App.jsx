import { Component } from 'react';
import Form from './form';
import ContactList from './contactList';
import FilterInput from './filterInput';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = ({ target: { value } }) => {
    this.setState(() => ({
      filter: value,
    }));
  };

  submitContact = ({ name, number }) => {
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          handleSubmit={this.handleSubmit}
          nameValue={this.state.name}
          telValue={this.state.number}
          onSubmit={values => this.submitContact(values)}
        />
        <h2>Contacts</h2>
        <FilterInput
          fiterValue={this.state.filter}
          handleFilter={this.handleFilter}
        />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
