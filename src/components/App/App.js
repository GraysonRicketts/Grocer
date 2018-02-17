import React from 'react';

import './App.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import GroceryList from './../../containers/GroceryList';

const App = () => (
  <div className="wrapper">

    <Header />

    <GroceryList />

    <Footer />

  </div>
);


export default App;
