import React from 'react';

class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='itemEditor'>
        <div>
          <label htmlFor="">Item</label>
          <input type="text"/>
        </div>

        <div>
          <label htmlFor="">Quantity</label>
          <input type="text"/>
        </div>

        <div>
          <label htmlFor="">Size</label>
          <input type="text"/>
        </div>

        <div>
          <label htmlFor="">Note</label>
          <input type="text"></input>
        </div>
      </form>
    );
  }
}

export default ItemEditor;
