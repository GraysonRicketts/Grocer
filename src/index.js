import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import Root from './components/Root/Root';

let store = createStore();

render(
  <Root store={store} />,
   document.getElementById('root')
);
