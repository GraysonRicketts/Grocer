import React, { Component } from 'react';
import Item from './../ItemContainer/Item';


export default class Category extends Component {
  render() {
    const { name, items } = this.props

    return (
      <div className='category'>
        <h3>
          {name}
        </h3>

        {
          items ? items.map((id) => {
            return (
              <Item
                key={id}
                id={id}
              />
            )
          }) : null
        }
      </div>
    )
  }
}
