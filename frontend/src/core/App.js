import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../views/Login';
import NotFound from '../views/NotFound';
import Home from '../views/Home';
import Register from '../views/Register';
import Conversations from '../views/Conversations';
import Contacts from '../views/Conversations';
import Configurations from '../views/Conversations';

let routes = [
    { path: "/", exact: true, component: Home },
    { path: "/login", exact: true, component: Login },
    { path: "/register", exact: true, component: Register },
    { path: "/conversations", exact: true, component: Conversations },
    { path: "/contacts", exact: true, component: Contacts },
    { path: "/configurations", exact: true, component: Configurations },
    { path: "*", component: NotFound }
]

function App() {
  return (
    <Router>
        <Switch>
            {routes.map((item) => (
                <Route {...item} />
            ))}
        </Switch>
    </Router>
  );
}

export default App;
