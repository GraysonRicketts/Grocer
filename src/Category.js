import React from 'react';

import { Row, Col } from 'react-bootstrap'

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

    return (
      <Row>
        <Col>
          <h4 className="row">
            {categoryName}
          </h4>

          {items}
        </Col>
      </Row>
    );
  }
}

export default Category;
