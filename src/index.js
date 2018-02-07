import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import registerServiceWorker from './registerServiceWorker';
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
registerServiceWorker();
