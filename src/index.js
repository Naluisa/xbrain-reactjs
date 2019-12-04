import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Conclui from './Conclui';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact={true} component={App} />
        <Route path="/conclui" component={Conclui} />
    </BrowserRouter>
    , document.getElementById('root'));
