import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleEnterPressed = this.handleEnterPressed.bind(this)
  }

  handleEnterPressed(event) {
    const newItemName = event.target.value
    if (event.key !== 'Enter' && newItemName !== null) {
      return
    }

    const { addItemToBasket } = this.props

    const newItem = {
      name: newItemName,
      checkedOff: false
    }

    addItemToBasket(newItem)

    event.target.value = null
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder={"Add an item"} onKeyPress={this.handleEnterPressed}/>
      </div>
    );
  }
}

export default Search;
