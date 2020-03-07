import React from 'react';

import {
  Link
} from "react-router-dom";

export default () => (
    <div>
        <h1>
            SimpleChat<br />
            <small>Sistema simples de chat.</small>
        </h1>
        
        <Link to="/login">Entrar na conta</Link><br />
        <Link to="/register">Cadastrar na conta</Link>
    </div>
);