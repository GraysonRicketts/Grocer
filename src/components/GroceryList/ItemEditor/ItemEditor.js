import React, { Component } from 'react'
import { CATEGORIES } from './../../../utils/consts'

export default class ItemEditor extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSaveClicked = this.handleSaveClicked.bind(this)
  }

  handleDelete() {
    const { deleteItem, id } = this.props

    deleteItem(id)
  }

  handleOnChange(event) {
    const { updateItem, id } = this.props
    const key = event.target.name
    const value = event.target.value

    updateItem(id, { [key]: value })
  }

  handleSaveClicked(event) {
    const { closeEditor, saveItem, id, name, number, size, category, note } = this.props

    saveItem(id, {name, number, size, category, note})
    closeEditor()
  }

  render() {
    const { name, number, size, category, note } = this.props
    const saveButtonStyle = {
      color: 'green', 
      display: 'inline-block'
    }
    const buttonIconStyle = { ...saveButtonStyle, width: '1rem', height: '1rem'}
    const textIconStyle = { ...saveButtonStyle, fontSize: '1.2rem', margin: 0, float: 'right'}

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
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={this.handleDelete}>
            <i className='far fa-trash-alt' style={{color: 'red', width: '1rem', height: '1rem'}}/>
          </button>

          <button onClick={this.handleSaveClicked}
          style={{border: '1px solid green', borderRadius: '5px', background: 'none'}}>
            <i class="far fa-save" style={buttonIconStyle}></i>
            <p style={textIconStyle}>Save</p>
          </button>
        </div>
      </div>
    )
  }
}
