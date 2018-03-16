import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleEnterPressed = this.handleEnterPressed.bind(this)
    
    this.state = {
      numberOfItemsAdded: 0
    }
  }

  handleEnterPressed(event) {
    const newItemName = event.target.value
    if (event.key !== 'Enter' && newItemName !== null) {
      return
    }

    const { addItemToBasket } = this.props

    const id = this.state.numberOfItemsAdded + 1000
    const newItem = {
      id,
      name: newItemName,
      category: ' ',
      checkedOff: false
    }
    this.setState((prevState) => ({
      numberOfItemsAdded: prevState.numberOfItemsAdded + 1
    }))

    addItemToBasket(newItem)

    event.target.value = null
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder={"Search"} onKeyPress={this.handleEnterPressed}/>
      </div>
    );
  }
}

export default Search;
