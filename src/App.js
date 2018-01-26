import React from 'react';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import GroceryList from './GroceryList';

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

        <Header groceryListName={groceryListName} />

        <GroceryList />

        <Footer />

      </div>
    );
  }
}

export default App;
