import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './configureStore'
import Account from './components/Account/Account';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage/Homepage'
import GroceryList from './components/GroceryList/GroceryListContainer/GroceryList';

const store = configureStore()

export default class Root extends Component {
  render() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/account' component={Account}/>
            <Route path='/basket' component={GroceryList}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
