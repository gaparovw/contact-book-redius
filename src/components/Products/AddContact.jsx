import React, { useState } from 'react';
import { useContacts } from '../../contexts/ContactsContextProvider';

const AddContact = () => {
    const { addContactInDb } = useContacts();
    const [contact, setContact] = useState({
        name: '',
        surname: '',
        phone: '',
    })

    function handleInp(e) {
        let obj = { ...contact, [e.target.name]: e.target.value }
        setContact(obj);
    }

    return (
        <div>
            <input type="text" onChange={(e) => handleInp(e)} name='name' />
            <input type="text" onChange={(e) => handleInp(e)} name='surname' />
            <input type="text" onChange={(e) => handleInp(e)} name='phone' />
            <button onClick={() => addContactInDb(contact)}>Add Contact</button>
        </div>
    );
};

export default AddContact;