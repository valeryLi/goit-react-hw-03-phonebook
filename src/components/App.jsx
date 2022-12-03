import { nanoid } from 'nanoid';
import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    const isExist = contacts.find(contact => contact.name === newContact.name);

    if (isExist) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  contactsFilter = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.contactsFilter()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
