import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import itemApp from './reducers';
import Root from './components/Root/Root';

let store = createStore(itemApp);

render(
  <Root store={store} />,
   document.getElementById('root')
);
