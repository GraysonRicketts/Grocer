import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
          {this.props.groceryListName}
        </header>
      </div>
    );
  }
}

export default Header;
