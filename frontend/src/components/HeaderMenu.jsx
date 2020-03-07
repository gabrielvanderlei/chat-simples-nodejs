import React, { useState } from 'react';

import {
  Link
} from "react-router-dom";

export default () => {
    let [menuOption, setMenuOption] = useState(0);
    
    let options = [
        { "name": "Conversas", "link": "/conversations"},
        { "name": "Contatos", "link": "/contacts"},
        { "name": "Configurações", "link": "/configurations"}
    ];

    let mountOption = ({ name, link }, key, selected) => {
        let changeScreen = () => {
            setMenuOption(key);
        };

        return (
            <div className="option" onClick={changeScreen}>
                <Link to={link}>{name}</Link>
            </div>
        )
    };

    let mountMenu = () => (
        <div class="menuOptions">
            {options.map( (item, key) => 
                mountOption(item, key, menuOption === key))}
        </div>
    )

    return (
        <div class="menu">
            {mountMenu()}
        </div>
    );
}