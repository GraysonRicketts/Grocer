import React from 'react';

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

    return (
      <div className="wrapper">

        <Header groceryListName={groceryListName} />

        <Search />

        <GroceryList />

        <Footer />

      </div>
    );
  }
}

export default App;
