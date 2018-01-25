import React from 'react';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';
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

    const bodyStyle = {
      height: '100%',
      margin: 0,
      padding: 0
    }

    return (
      <div className="wrapper" style={bodyStyle}>

        <Header groceryListName={groceryListName} />

        <Search />

        <GroceryList />

        <Footer />

      </div>
    );
  }
}

export default App;
