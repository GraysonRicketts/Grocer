import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchItemsIfNeeded, addItemToBasket } from '../actions/itemActions'
import Search from './../components/GroceryListApp/Search/Search';
import Category from './../components/GroceryListApp/Category/Category';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class GroceryList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showChecked: true
    }

    this.handleShowCheckedToggle = this.handleShowCheckedToggle.bind(this)
  }

  componentDidMount() {
    this.props.fetchItemsIfNeeded('any')
  }

  handleShowCheckedToggle() {
    this.setState((prevState) => {
      return {
        ...prevState,
        showChecked: !prevState.showChecked
      }
    })
  }

  render() {
    const { categories, addItemToBasket } = this.props
    return (
      <div>

        <Header />

        <div className="groceryList">
          <Search addItemToBasket={addItemToBasket}/>

          {categories ? this.makeList(categories) : this.showBlankBasket()}
        </div>

        <Footer />
      </div>
    )
  }

  makeList(categories) {
    const buttonStyle = {
      fontSize: '.7rem',
      backgroundColor: 'white',
      padding: '3px',
      borderRadius: '2px'
    }

    return (
      <div>
        {Object.keys(categories).sort().map((name) => {
          let categoryItems = categories[name].items
          if (!this.state.showChecked) {
            categoryItems = categoryItems.filter((item) => {
              return !item.checkedOff
            })

            if (!categoryItems) {
              return null
            }
          }

          return (
            <Category
              key={categories[name].id}
              name={name}
              items={categoryItems}
            />
          )
        })}

        <div style={{
              position: 'absolute',
              bottom: 35,
              textAlign: 'center',
              left: 0, right: 0
            }}>
          <input type='button' name="showChecked" 
          onClick={this.handleShowCheckedToggle}
          value={(this.state.showChecked ? 'Hide' : 'Show') + ' checked items'}
          style={buttonStyle}/>
        </div>
      </div>
    )
  }

  showBlankBasket() {
    return null
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
