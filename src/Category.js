import React from 'react';

import Item from './Item';

class Category extends React.Component {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <Item itemName={item.itemName}
        size={item.size}
        quantity={item.quantity}
        key={item._id}/>
      );
    });

    const categoryName = this.props.categoryName;

    const categoryStyle = {
      width: '100%',
      marginTop: '20px',
      marginBottom: '35px'
    };

    const categoryNameStyle = {
      width: '100%',
      margin: 'auto',
      fontWeight: 500
    }

    return (
      <div style={categoryStyle}>
        <h4 style={categoryNameStyle}>
          {categoryName}
        </h4>

        {items}
      </div>
    );
  }
}

export default Category;
