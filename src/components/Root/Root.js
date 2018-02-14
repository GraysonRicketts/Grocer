import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Account from './../Account/Account';
import App from './../App/App';
import Login from './../Login/Login';
import Signup from './../Signup/Signup';
import Homepage from './../Homepage/Homepage';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/account' component={Account}/>
        <Route path='/basket' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

Root.prototype = {};

export default Root;
