import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from './../../actions/userActions'

class Logout extends Component {
  render() {
    this.props.logout()
  
    // re-direct user to the home page
    return <Redirect to='/' />
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(
  null,
  mapDispatchToProps
)(Logout)
