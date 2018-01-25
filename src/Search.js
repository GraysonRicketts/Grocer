import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderText: "Search",
    }
  }

  render() {
    const style = {
      width: '100%',
      marginTop: '30px',
      borderStyle: 'solid',
      borderWidth: '2px',
    }

    return (
      <form style={style}>
        <input type="text" placeholder={this.state.placeholderText} size={44}/>
      </form>
    );
  }
}

export default Search;
