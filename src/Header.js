import React from 'react';

class Header extends React.Component {
  render() {
    const style = {
      width: '100%',
      top: 0,
      left: 0,
      position: 'fixed'
    };

    return (
      <header className="header" style={style}>
          {this.props.groceryListName}
      </header>
    );
  }
}

export default Header;
