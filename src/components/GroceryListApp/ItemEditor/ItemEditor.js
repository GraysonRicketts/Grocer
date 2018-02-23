import React, { Component } from 'react';

export default class ItemEditor extends Component {
  render() {
    const { name, number, size, note } = this.props
    return (
      <form className='itemEditor'>
        <div>
          <label htmlFor="">Item</label>
          <input type="text" value={name}/>
        </div>

        <div>
          <label htmlFor="">Number</label>
          <input type="number" value={number} />
        </div>

        <div>
          <label htmlFor="">Size</label>
          <input type="text" value={size} />
        </div>

        <div>
          <label htmlFor="">Note</label>
          <input type="text-area" value={note}/>
        </div>
      </form>
    )
  }
}
