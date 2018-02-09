import React from 'react';

import Search from './Search/Search';
import Category from './Category/Category';
import importedData from './../../../data/data.json'

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: importedData.items
    };
  }

  render() {
    let categories = {};
    this.state.items.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      let categoryList = categories[item.category];

      categoryList.push(item);
    });

    const list = [];
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
