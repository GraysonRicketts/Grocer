import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleItem, fetchItemsIfNeeded } from '../actions/itemActions'
import Search from './../components/GroceryListApp/Search/Search';
import Category from './../components/GroceryListApp/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class GroceryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchItemsIfNeeded('any'))
  }

  render() {
    const { categories } = this.props
    return (
      <div>

        <Header />

        <div className="groceryList">
          <Search />

          {Object.keys(categories).map(name => (
            <Category key={categories[name].id} 
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

  if (items.length > 0) {
    items.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = { id: categories.length, items: []}
      }
      
      categories[item.category].items.push(item);
    });
  }

  return categories
}

const mapStateToProps = state => {
  return {
    categories: getCategories(state.items)
  }
}

const mapDispathToProps = dispatch => {
  return {
    onItemToggled: id => {
      dispatch(toggleItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GroceryList)
