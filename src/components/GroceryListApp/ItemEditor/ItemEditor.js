import React, { Component } from 'react';

export default class ItemEditor extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event) {
    const { onChange, id } = this.props
    const key = event.target.name
    const value = event.target.value

    onChange(id, {[key]: value})
  }

  render() {
    const { name, number, size, note } = this.props
    return (
      <form className='itemEditor'>
        <div>
          <label htmlFor="name">Item</label>
          <input type="text" name={"name"}
          value={name} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input type="number" name={"number"}
          value={number} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <input type="text" name={"size"}
          value={size} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor="note">Note</label>
          <input type="text-area" name={"note"}
          value={note} 
          onChange={this.handleOnChange}/>
        </div>
      </form>
    )
  }
}
