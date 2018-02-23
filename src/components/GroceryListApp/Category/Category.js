import React, { Component } from 'react';
import Item from './../Item/Item';


export default class Category extends Component {
  render() {
    const { toggleItem, name, items} = this.props

    return (
      <div className='category'>
        <h3>
          {name}
        </h3>
    
        {
          items.map((item) => {
            return (
              <Item 
                onClick={() => toggleItem(item.id)}
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
  }
}
