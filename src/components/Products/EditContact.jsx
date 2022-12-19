import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContacts } from '../../contexts/ContactsContextProvider';

const EditContact = () => {
    const navigate = useNavigate();
    const { editContact, oneContact } = useContacts();
    const { id } = useParams();
    const [state, setState] = useState(oneContact)
    const { name, surname, phone } = oneContact

    function handleInp(e) {
        let obj = { ...state, [e.target.name]: e.target.value }
        setState(obj);
    }
    return (
        <div>
            <input type="text" onChange={(e) => { handleInp(e) }} name='name' value={name || ''} />
            <input type="text" onChange={(e) => { handleInp(e) }} name='surname' value={surname || ''} />
            <input type="text" onChange={(e) => { handleInp(e) }} name='phone' value={phone || ''} />
            <button onClick={() => {
                editContact(id, state)
                navigate('/')
            }}>Save Edit</button>
        </div>
    );
};

export default EditContact;