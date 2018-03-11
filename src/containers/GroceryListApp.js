import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchItemsIfNeeded, addItemToBasket } from '../actions/itemActions'
import Search from './../components/GroceryListApp/Search/Search';
import Category from './../components/GroceryListApp/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class GroceryList extends Component {
  componentDidMount() {
    this.props.fetchItemsIfNeeded('any')
  }

  render() {
    const { categories, addItemToBasket } = this.props
    return (
      <div>

        <Header />

        <div className="groceryList">
          <Search addItemToBasket={addItemToBasket}/>

          {Object.keys(categories).sort().map(name => (
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
      const categoryName = item.category

      if (!categories[categoryName]) {
        categories[item.category] = { id: id++, items: []}
      }

      categories[categoryName].items.push(item);
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
  fetchItemsIfNeeded,
  addItemToBasket
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GroceryList)
