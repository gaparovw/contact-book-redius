import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const contactsContext = createContext()
export const useContacts = () => {
    return useContext(contactsContext);
}

// const INIT_STATE = {
//     getOneContact: {},
//     getAllContacts: [],
// }

// function reducer(state = INIT_STATE, action){
//     switch(action.type){
//         case 'getAllContacts':
//             return {...state, }
//         case 'getOneContact':
//             return {...state,}
//         default:
//             return state
//     }
// }

const ContactsContextProvider = ({ children }) => {
    const API = 'http://localhost:8000/contacts';
    const [contacts, setContacts] = useState([]);
    const [oneContact, setOneContact] = useState({});

    async function addContactInDb(obj) {
        await axios.post(API, obj)
    }

    async function getContacts() {
        const { data } = await axios.get(API);
        setContacts(data);
    }

    async function deleteContact(id) {
        await axios.delete(`${API}/${id}`)
        getContacts();
    }

    async function getOneContact(id) {
        const { data } = await axios.get(`${API}/${id}`);
        setOneContact(data)
    }

    async function editContact(id, newObj) {
        await axios.patch(`${API}/${id}`, newObj)
    }

    const values = {
        addContactInDb,
        getContacts,
        contacts,
        deleteContact,
        editContact,
        getOneContact,
        oneContact,
    }
    return (
        <contactsContext.Provider value={values}>
            {children}
        </contactsContext.Provider>
    );
};

export default ContactsContextProvider;