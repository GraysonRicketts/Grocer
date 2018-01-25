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
    const itemName = this.props.itemName;
    const size = this.props.size;
    const quantity = this.props.quantity;

    const selected = this.state.selected;
    const backgroundColor = selected ? this.lightestGrey : this.white;
    const textDecoration = selected ? 'line-through' : 'none';

    const flexContainerStyle = {
      width: '100%',
      backgroundColor,
      textDecoration,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      margin: '5px 0',
      padding: '4px 3px',
      border: '1px solid' + this.lightGrey
    };

    const inline = {
      display: 'inline-block',
      height: '100%'
    };


    const left = {
      flexShrink: 0,
      flexGrow: 1
    }

    return (
      <div style={flexContainerStyle}>

        <div style={Object.assign({}, inline, left)}>
          <div>
            {itemName}
          </div>
          <div>
            {size}
          </div>
        </div>
        
        <div style={inline}>
          {quantity}
        </div>

        <div style={inline}>
          <input type="checkbox" onClick={this.handleClick}/>
        </div>

      </div>
    );
  }
}

export default Item;
