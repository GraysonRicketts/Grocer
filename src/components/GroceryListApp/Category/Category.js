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
                toggleItem={() => toggleItem(item.id)}
                key={item.id}
                id={item.id}
              />
            )
          })
        }
      </div>
    )
  }
}
