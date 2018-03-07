import React, { Component } from 'react';

export default class ItemEditor extends Component {
  render() {
    const { onChange, name, number, size, note } = this.props
    return (
      <form className='itemEditor'>
        <div>
          <label htmlFor="">Item</label>
          <input type="text" value={name} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="">Number</label>
          <input type="number" value={number} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="">Size</label>
          <input type="text" value={size} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="">Note</label>
          <input type="text-area" value={note} onChange={onChange}/>
        </div>
      </form>
    )
  }
}
