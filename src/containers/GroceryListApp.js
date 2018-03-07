import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchItemsIfNeeded } from '../actions/itemActions'
import Search from './../components/GroceryListApp/Search/Search';
import Category from './../components/GroceryListApp/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class GroceryList extends Component {
  componentDidMount() {
    this.props.fetchItemsIfNeeded('any')
  }

  render() {
    const { categories } = this.props
    return (
      <div>

        <Header />

        <div className="groceryList">
          <Search />

          {Object.keys(categories).map(name => (
            <Category
            key={categories[name].id}
            name={name}
            items={categories[name].items} />
          ))}
        </div>

        <Footer />
      </div>
    )
  }
}

const getCategories = (items) => {
  let categories = {};
  let id = 0

  if (items.length > 0) {
    items.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = { id: id++, items: []}
      }
      
      categories[item.category].items.push(item);
    });
  }

  return categories
}

function mapStateToProps(state) {
  return {
    categories: getCategories(state.basket.items)
  }
}

const mapDispathToProps = {
  fetchItemsIfNeeded
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GroceryList)
