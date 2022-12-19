import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContacts } from '../contexts/ContactsContextProvider';

const Homepage = () => {
    const { contacts, getContacts, deleteContact, getOneContact } = useContacts();
    useEffect(() => {
        getContacts()
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            {contacts.map(item => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.surname}</p>
                    <p>{item.phone}</p>
                    <button onClick={() => {
                        navigate(`/edit/${item.id}`)
                        getOneContact(item.id)
                    }}>edit</button>
                    <button onClick={() => deleteContact(item.id)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default Homepage;