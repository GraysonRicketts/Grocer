import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import GroceryListComponent from "../components/App/GroceryList/GroceryList";

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

const GroceryList = connect(
  mapStateToProps,
  mapDispathToProps
)(GroceryListComponent)

export default GroceryList
