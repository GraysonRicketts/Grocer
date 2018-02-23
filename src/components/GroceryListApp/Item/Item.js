import React, { Component } from 'react';
import ItemEditor from './../ItemEditor/ItemEditor';

export default class Item extends Component {
  render() {
    const { onClick, name, number, size, note, toggleItem } = this.props

    return (
      <div className='itemRow' >

      <div className="item">
        <div className='itemTextDiv'>
          <div>
            <h4>
              {name}
            </h4>
          </div>
          <div>
            {size}
          </div>
        </div>

        <div className="note" >
          <i className="far fa-sticky-note"></i>
        </div>

        <div className='number'>
          {number}
        </div>

        <div className="activeIndicator">
          <label className='check'>
            <input type="checkbox" className="checkbox" onClick={onClick}/>
            <div className="box"></div>
          </label>
        </div>
      </div>

      <div className="itemForm" >
        <ItemEditor />
      </div>

      </div>
    )
  }
}
