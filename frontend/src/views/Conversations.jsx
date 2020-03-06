import React, { useState } from 'react';

export default () => {

    let [conversations, setConversation] = useState({});
    let conversations = [];

    conversations.push({
        "destination": "gabrielvanderlei",
        "content": "Oops"
    });

    setConversation(conversations);

    let mountConversations = ({ destination, content }) => (
        <div>
            <h2>{destination}</h2>
            <p>{content}</p>
        </div>
    );

    return (
        <div>
            {conversations.forEach((item, key) => mountConversations(item))}
        </div>
    );
}