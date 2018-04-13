import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleEnterPressed = this.handleEnterPressed.bind(this)
  }

  handleEnterPressed(event) {
    let text = event.target.value.trim()
    if (event.key !== 'Enter' && text !== null) {
      return
    }

    // Gets number from front of string
    let number = null
    const splitText = text.split(' ')
    if (isNumeric(splitText[0])) {
      if (splitText.length < 2) {
        return
      }
      number = Number(splitText[0])
      text = ''.concat(splitText.slice(1))
    }

    const { addItemToBasket } = this.props

    const newItem = {
      number,
      name: text,
      checkedOff: false
    }

    addItemToBasket(newItem)

    event.target.value = null
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder={'Add an item (e.g. "7 apples")'} onKeyPress={this.handleEnterPressed}/>
      </div>
    );
  }
}

function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

export default Search;
