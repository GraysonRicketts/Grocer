import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import GroceryList from './GroceryList';

import { Grid} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>

        <Header groceryListName="Grayson's List" />

        <GroceryList />

        <Footer />

      </Grid>
    );
  }
}

export default App;
