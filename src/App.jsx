import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './style.module.scss';

export default function App() {
  const [stateContacts, setStateContacts] = useState([]);
  const [stateFilter, setStateFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      setStateContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(stateContacts));
  }, [stateContacts]);

  const addContact = data => {
    data.id = nanoid();
    setStateContacts(prevState => [...prevState, data]);
  };

  const deleteContacts = contactId => {
    setStateContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = event => {
    setStateFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    if (stateContacts) {
      console.log(stateContacts);
      return stateContacts.filter(contact =>
        contact.name.toLowerCase().includes(stateFilter.toLowerCase()),
      );
    }
  };

  App.propTypes = {
    stateContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    stateFilter: PropTypes.string.isRequired,
  };

  return (
    <Container>
      <h1 className={styles.title__phonebook}>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={stateContacts} />
      <h2 className={styles.title__contacts}>Contacts</h2>
      <Filter value={stateFilter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContacts={deleteContacts}
      />
    </Container>
  );
}
