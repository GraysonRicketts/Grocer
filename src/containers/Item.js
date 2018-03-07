import React, { Component } from 'react';
import ItemEditor from './../components/GroceryListApp/ItemEditor/ItemEditor';
import { connect } from 'react-redux'
import { toggleItem, updateItemIfNeeded } from '../actions/itemActions'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.handleRowOnClick = this.handleRowOnClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleRowOnClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        expanded: !prevState.expanded
      }
    })
  }

  handleToggle() {
    const { toggleItem, id } = this.props
    toggleItem(id)
  }

  render() {
    const { id, name, number, size, note, checkedOff } = this.props.item

    return (
      <div className='itemRow' >

        <div className="item" style={{opacity: checkedOff ? .4 : null}}>
          <div className='itemTextDiv' 
          onClick={this.handleRowOnClick}
          style={{textDecoration: checkedOff ? 'line-through': 'none'}}>
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
              onClick={this.handleToggle}/>
              <div className="box"></div>
            </label>
          </div>
        </div>

        {this.state.expanded ?
          (
            <div className="itemForm" >
              <ItemEditor
              id={id}
              name={name}
              number={number}
              size={size}
              note={note}
              onChange={this.props.updateItemIfNeeded}/>
            </div>
          ) : null
        }

      </div>
    )
  }
}

const mapDispatchToProps = {
  toggleItem,
  updateItemIfNeeded
}

function mapStateToProps(state, ownProps) {
  return {
    item: state.basket.items[ownProps.id]
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
