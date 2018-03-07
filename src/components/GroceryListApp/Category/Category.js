import React, { Component } from 'react';
import Item from './../../../containers/Item';


export default class Category extends Component {
  render() {
    const { name, items} = this.props

    return (
      <div className='category'>
        <h3>
          {name}
        </h3>

        {
          items ? items.map((item) => {
            return (
              <Item 
                key={item.id}
                id={item.id}
              />
            )
          }) : null
        }
      </div>
    )
  }
}
