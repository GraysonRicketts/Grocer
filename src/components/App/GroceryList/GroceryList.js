import React from 'react';
import Search from './Search/Search';
import Category from './Category/Category';

const GroceryList = ({ categories }) => (
  <div className="groceryList">
    <Search />

    {Object.keys(categories).map(name => (
      <Category key={categories[name].id} 
      name={name}
      items={categories[name].items} />
    ))}
  </div>
)

export default GroceryList;
