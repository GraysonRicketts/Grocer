import React from 'react';
import ItemEditor from './ItemEditor/ItemEditor';

const Item = ({ name, number, size, note }) => (
  <div className='itemRow' >

    <div className="item">
      <div className='itemTextDiv'
      // onClick={}
      >
        <div>
          <h4>
            {name}
          </h4>
        </div>
        <div>
          {size}
        </div>
      </div>

      <div className="note" 
      // onClick={this.showDetails}
      >
        <i className="far fa-sticky-note"></i>
      </div>

      <div className='number'>
        {number}
      </div>

      <div className="activeIndicator">
        <label className='check'>
          <input type="checkbox" className="checkbox" 
          // onClick={this.handleCheckBoxClick}
          />
          <div className="box"></div>
        </label>
      </div>
    </div>

    <div className="itemForm" >
      <ItemEditor />
    </div>

  </div>
);

export default Item;
