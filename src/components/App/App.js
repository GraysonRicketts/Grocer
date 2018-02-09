import React from 'react';

import './App.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import GroceryList from './GroceryList/GroceryList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Grayson"
    }
  }

  render() {
    const groceryListName = `${this.state.user}'s List`

    return (
      <div className="wrapper">

        <Header title={groceryListName} />

        <GroceryList />

        <Footer />

      </div>
    );
  }
}

export default App;
