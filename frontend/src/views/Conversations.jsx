import React, { useState, useEffect } from 'react';
import HeaderMenu from "../components/HeaderMenu";

export default () => {

    let [conversations, setConversation] = useState([]);
    let conversationsList = [];

    useEffect(() => {
        conversationsList.push({
            "destination": "gabrielvanderlei",
            "content": "Oops"
        });
        
        conversationsList.push({
            "destination": "gabrielvanderlei",
            "content": "Oops"
        });

        setConversation(conversationsList);
    });

    let mountConversations = ({ destination, content }) => (
        <div>
            <h2>{destination}</h2>
            <p>{content}</p>
        </div>
    );

    return (
        <div>
            <HeaderMenu />
            <div>
                {conversations.map((item, key) => mountConversations(item))}
            </div>
        </div>
    );
}