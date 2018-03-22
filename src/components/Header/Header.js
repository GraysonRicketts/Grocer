import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { isLoggedIn, email } = this.props
    return (
      <div className="header">
        {isLoggedIn ? email : null}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/basket">Basket</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
