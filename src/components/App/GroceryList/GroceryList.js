import React from 'react';

import Search from './Search/Search';
import Category from './Category/Category';
import importedData from './../../../data/data.json'

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: importedData.items
      });
    }, 1000);
  }

  render() {
    let categories = {};
    const list = [];

    if (this.state.items.length > 0) {
      this.state.items.forEach((item) => {
        if (!categories[item.category]) {
          categories[item.category] = [];
        }
        let categoryList = categories[item.category];
  
        categoryList.push(item);
      });
    }

    for(let category in categories) {
      const items = categories[category]
      category = (<Category categoryName={category} items={items} key={category}/>);
      list.push(category);
    }

    return (
      <div className="groceryList">
        <Search />

        {list}
      </div>
    );
  }
}

export default GroceryList;
