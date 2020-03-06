import React, { useState } from 'react';

export default () => {
    let [menuOption, setMenuOption] = useState(0);
    
    let options = [
        { "name": "Conversas", "link": "/conversations"},
        { "name": "Contatos", "link": "/contacts"},
        { "name": "Configurações", "link": "/configurations"}
    ];

    let mountOption = ({ name, link }, selected) => (
        <div class="option" onClick={changeScreen}>
            <Link to={link}>{name}</Link>
        </div>
    );

    let mountMenu = () => (
        <div class="menuOptions">
            {options.forEach(item, key => 
                mountOption(item, menuOption === key))}
        </div>
    )

    return (
        <div class="menu">
            {mountMenu()}
        </div>
    );
}