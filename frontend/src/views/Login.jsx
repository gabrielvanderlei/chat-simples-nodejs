import React from 'react';

import {
  useHistory
} from 'react-router-dom';

export default () => {
    let history = useHistory();

    let handleLogin = () => {
        history.push("/conversations");
    }

    return (
        <div>
            <h1>
                Entrar<br />
                <small>Entre em sua conta.</small>
            </h1>
            <div class="form">
                <input type="email" /><br />
                <input type="password" /><br />
                <input type="submit" onClick={handleLogin}/>
            </div>
        </div>
    );
};