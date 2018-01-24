import React from 'react';

import { Row, Col } from 'react-bootstrap'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      color: '#FFF',
      strikethrough: false
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  }

  render() {
    const itemName = this.props.itemName;
    const size = this.props.size;
    const quantity = this.props.quantity;

    const selected = this.state.selected;
    const color = selected ? '#EEE' : '#FFF'
    const textDecoration = selected ? 'line-through' : 'none';

    const style = {
      backgroundColor: color,
      textDecoration
    }

    return (
      <Row style={style}>
        <Col xs={8}>
          <Row>
            {itemName}
          </Row>
          <Row>
            {size}
          </Row>
        </Col>
        <Col xs={2}>
          {quantity}
        </Col>
        <Col>
          <input type="checkbox" onClick={this.handleClick}/>
        </Col>
      </Row>
    );
  }
}

export default Item;
