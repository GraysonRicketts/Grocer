import React, { Component } from 'react'
import { isUserAuthenticated } from './../../utils/auth'

class Header extends Component {
  constructor(props) {
    super(props)

    this.onLogoutClicked = this.onLogoutClicked.bind(this)
  }

  onLogoutClicked() {
    const { logout, isLoggedIn } = this.props
    if (!isLoggedIn) {
      return
    }

    logout()
  }

  render() {
    const isLoggedIn = isUserAuthenticated()
    return (
      <div className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/basket">Basket</a></li>
            {isLoggedIn ? <li><a href="/account">Account</a></li> :
              <li><a href="/signup">Sign up</a></li> }
            {isLoggedIn ? <li><a href='/logout'>Logout</a></li> :
              <li><a href="/login">Login</a></li> }
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
