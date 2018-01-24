import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Search from './Search';
import GroceryList from './GroceryList';

class App extends React.Component {
  render() {
    const style = {
      display: 'grid'
    }

    return (
      <div className="wrapper" style={style}>

        <Header groceryListName="Grayson's List" />

        <Search />

        <GroceryList />

        <Footer />

      </div>
    );
  }
}

export default App;
