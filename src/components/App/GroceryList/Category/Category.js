import React from 'react';
import Item from './Item/Item';


const Category = ({ name, items }) => (
  <div className='category'>
    <h3>
      {name}
    </h3>

    {
      items.map((item) => {
        return (
          <Item 
            key={item.id}
            name={item.name}
            size={item.size}
            quantity={item.quantity}
            note={item.note}
          />
        )
      })
    }
  </div>
)


export default Category;
