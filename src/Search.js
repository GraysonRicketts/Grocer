import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderText: "Search",
    }
  }

  render() {
    return (
      <div className="search">
        <form>
          <input type="text" placeholder={this.state.placeholderText}/>
        </form>
      </div>
    );
  }
}

export default Search;
