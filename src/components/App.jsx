import { Component } from 'react';
import Form from './form';
import { nanoid } from 'nanoid';
import ContactList from './contactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = this.state.name;
    const number = this.state.number;
    this.state.contacts.push({ name: name, number: number, id: id });
    this.setState(() => ({ name: '', number: '' }));
  };

  handleChange = ({ target }) => {
    this.setState(() =>
      target.name === 'name' ? { name: target.value } : { number: target.value }
    );
  };

  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          nameValue={this.state.name}
          telValue={this.state.number}
        />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
