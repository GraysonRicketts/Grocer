import React from 'react';

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

    // Colors
    this.lightestGrey = '#DDD'
    this.lightGrey = '#EEE';
    this.black = '#111';
    this.white = '#FFF';
  }

  handleClick() {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  }

  render() {
    // Data
    const itemName = this.props.itemName;
    const size = this.props.size;
    const quantity = this.props.quantity;

    // State
    const selected = this.state.selected;

    // State specific styling
    const backgroundColor = selected ? this.lightestGrey : this.white;
    const textDecoration = selected ? 'line-through' : 'none';
    const opacity = selected ? 0.5 : 1;

    const flexContainerStyle = {
      backgroundColor,
      textDecoration,
      opacity
    };

    return (
      <div className='item' style={flexContainerStyle}>

        <div className='itemTextDiv'>
          <div>
            <h4>
              {itemName}
            </h4>
          </div>
          <div>
            {size}
          </div>
        </div>
        
        <div className='quantity'>
          {quantity}
        </div>

        <div className='checkbox'>
          <input type="checkbox" onClick={this.handleClick}/>
        </div>

      </div>
    );
  }
}

export default Item;
