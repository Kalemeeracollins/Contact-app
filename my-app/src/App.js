import React, { useState, useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  
   const LOCAL_STORAGE_KEY= "contacts";

   const [contacts, setContacts] = useState([]);

   const addContactHandler = (contact) => {
     console.log(contact);
     setContacts([...contacts, {id: uuid(), ...contact}]);
   };

   const removeContactHandler = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id !==id;
     });

     setContacts(newContactList);
   }

   useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)setContacts(retriveContacts);
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="App">
      
    <h1>Contact Manager</h1>
      < AddContact addContactHandler={addContactHandler}/>
    < ContactList contacts={contacts} getContactId={removeContactHandler}/> 
    
    </div>
  );
}

export default App;
