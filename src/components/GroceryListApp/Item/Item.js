import React, { Component } from 'react';
import ItemEditor from './../ItemEditor/ItemEditor';
import { connect } from 'react-redux'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.handleCheckBoxOnClick = this.handleCheckBoxOnClick.bind(this)
    this.handleRowOnClick = this.handleRowOnClick.bind(this)
  }

  handleCheckBoxOnClick() {
    const { toggleItem } = this.props


    toggleItem()
  }

  handleRowOnClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        expanded: !prevState.expanded
      }
    })
  }

  render() {
    const { name, number, size, note } = this.props.item

    return (
      <div className='itemRow' >

        <div className="item">
          <div className='itemTextDiv' onClick={this.handleRowOnClick}>
            <div>
              <h4>
                {name}
              </h4>
            </div>
            <div>
              {size}
            </div>
          </div>

          {note ?
            (
              <div className="note" >
                <i className="far fa-sticky-note"></i>
              </div>
            ) : null
          }

          <div className='number'>
            {number}
          </div>

          <div className="activeIndicator">
            <label className='check'>
              <input type="checkbox" className="checkbox" 
              onClick={this.handleCheckBoxOnClick}/>
              <div className="box"></div>
            </label>
          </div>
        </div>

        {this.state.expanded ?
          (
            <div className="itemForm" >
              <ItemEditor 
              name={name}
              number={number}
              size={size}
              note={note}/>
            </div>
          ) : null
        }

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.basket.items[ownProps.id]
  }
}

export default connect(mapStateToProps)(Item)
