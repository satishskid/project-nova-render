
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/contacts')
      .then(response => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Project Nova - Contacts</h1>
      {loading ? <p>Loading contacts...</p> : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.first_name} {contact.last_name} - {contact.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
