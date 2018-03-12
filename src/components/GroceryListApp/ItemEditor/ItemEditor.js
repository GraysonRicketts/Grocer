import React, { Component } from 'react'
import { CATEGORIES } from './../../../utils/consts'

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
    const { name, number, size, category, note } = this.props
    return (
      <div className='itemEditor'>
        <div>
          <label htmlFor="name">Item</label>
          <input type="text" name="name"
          value={name} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input type="number" name="number"
          value={number} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <input type="text" name="size"
          value={size} 
          onChange={this.handleOnChange} />
        </div>

        <div>
          <label htmlFor='category'>Category</label>
          <select name='category' onChange={this.handleOnChange} value={category}>
            {CATEGORIES.map((categoryOption, index) => {
              return <option
                key={index}
                value={categoryOption}>
                  {categoryOption}
                </option>
            })}
          </select>
        </div>

        <div>
          <label htmlFor="note">Note</label>
          <textarea name={"note"}onChange={this.handleOnChange} value={note} />
        </div>
        <div>
          <i className='far fa-trash-alt'></i>
        </div>
      </div>
    )
  }
}
