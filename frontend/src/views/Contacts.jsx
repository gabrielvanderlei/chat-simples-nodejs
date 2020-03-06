import React, { useState } from 'react';

export default () => {

    let [contacts, setContacts] = useState({});
    let contactList = [];

    contactList.push({
        "username": "gabrielvanderlei",
        "content": "Gabriel Vanderlei",
    });
    
    contactList.push({
        "username": "gabrielvanderlei",
        "content": "Gabriel Vanderlei",
    });

    setContacts(contactList);

    let mountContacts = ({ destination, content }) => (
        <div>
            <h2>{destination}</h2>
            <p>{content}</p>
        </div>
    );

    return (
        <div>
            <HeaderMenu />
            <div>
                {contactList.forEach((item, key) => mountContacts(item))}
            </div>
        </div>
    );
}