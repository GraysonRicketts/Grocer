import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      color: '#FFF',
      strikethrough: false,
      showDetails: false
    }

    // This binding is necessary to make `this` work in the callback
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    this.showDetails = this.showDetails.bind(this);

    // Colors
    this.lightestGrey = '#DDD'
    this.lightGrey = '#EEE';
    this.black = '#111';
    this.white = '#FFF';
  }

  handleCheckBoxClick() {
    this.setState((prevState, props) => ({
      selected: !prevState.selected
    }));
  }

  showDetails() {
    this.setState((prevState, props) => ({
      showDetails: !prevState.showDetails
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
    const noteDisplay = this.props.note ? 'inline-block' : 'none';
    const detailsDisplay = this.state.showDetails ? 'block' : 'none';

    const flexContainerStyle = {
      backgroundColor,
      opacity
    };

    return (
      <div className='itemRow' style={flexContainerStyle}>

        <div className="item">
          <div className='itemTextDiv' style={{textDecoration}}
          onClick={this.showDetails}>
            <div>
              <h4>
                {itemName}
              </h4>
            </div>
            <div>
              {size}
            </div>
          </div>

          <div className="note" style={{ display: noteDisplay }}
          onClick={this.showDetails}>
            <i className="far fa-sticky-note"></i>
          </div>

          <div className='quantity'>
            {quantity}
          </div>

          <div className="activeIndicator">
            <label className='check'>
              <input type="checkbox" className="checkbox" onClick={this.handleCheckBoxClick}/>
              <div className="box"></div>
            </label>
          </div>
        </div>

        <div className="itemForm" style={{ display: detailsDisplay }}>
          <p>oh shit, you can see me</p>
        </div>

      </div>
    );
  }
}

export default Item;
