import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage/Homepage';
import Route from 'react-router-dom/Route';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/basket' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
