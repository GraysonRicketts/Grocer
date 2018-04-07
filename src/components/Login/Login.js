import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './../../styles/Login.css'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import { login } from './../../actions/userActions'
import { isUserAuthenticated, getBasketFromToken } from './../../utils/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLogin(event) {
    const { login } = this.props
    const email = this.state.email
    const password = this.state.password
    event.preventDefault()
    
    login(email, password)
  }

  handleEmailChange(event) {
    const email = event.target.value
    this.setState({email})
  }

  handlePasswordChange(event) {
    const password = event.target.value
    this.setState({password})
  }

  render() {
    const { email, password } = this.state

    if (isUserAuthenticated()) {
      const basket = getBasketFromToken()
      const loginRedirectURL = '/baskets/' + basket
      return (
        <Redirect to={loginRedirectURL} />
      )
    }

    return (
      <div className="wrapper">
        <Header />

          <div className='login'>
            <form onSubmit={this.handleLogin}>

              <div className="standardInput">
                <div>
                  <label>Email</label>
                  <input name='email' value={email} type="text" onChange={this.handleEmailChange}/>
                </div>

                <div>
                  <label>Password</label>
                  <input name='password' value={password} type="password" onChange={this.handlePasswordChange}/>
                </div>

                <div className='loginButton'>
                  <input type="submit" value="Login" />
                  <div className="create">
                    <a href='/signup'><p>Create an account</p></a>
                  </div>
                </div>

              </div>

              <div className="oauth">
                <input type="button" value="Google"/>
                <input type="button" value="Facebook"/>
              </div>

            </form>
          </div>

        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
