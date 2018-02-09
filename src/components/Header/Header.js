import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/basket">Basket</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
