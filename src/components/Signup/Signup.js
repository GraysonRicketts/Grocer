import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from './../../actions/userActions'
import './../../styles/Signup.css'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      rePassword: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onInputChanged = this.onInputChanged.bind(this)
  }

  onSubmit(event) {
    const { email, password, rePassword } = this.state

    if (password !== rePassword) {
      alert('Passwords don\'t match')
      event.preventDefault()
    }

    this.props.signup(email, password)
  }

  onInputChanged(event) {
    const stateProperty = event.target.name
    const input = event.target.value

    const newState = { ...this.state }
    newState[stateProperty] = input
    this.setState(newState)
  }

  render() {
    const { email, password, rePassword } = this.props
    return (
      <div className="wrapper">
    
        <Header />
    
          <form className='signup' onSubmit={this.onSubmit}>
            <div>
              <label>Email</label>
              <input type="text" name='email' value={email} onChange={this.onInputChanged}/>
            </div>
    
            <div>
              <label>Password</label>
              <input type="password" name='password' value={password} onChange={this.onInputChanged}/>
            </div>
    
            <div>
              <label>Re-enter Password</label>
              <input type="password" name='rePassword' value={rePassword} onChange={this.onInputChanged}/>
            </div>
    
            <div className="signupSubmit">
              <input type="submit" value="Sign up"/>
              <a href="/login">
                <p>Already have an account? Login</p>
              </a>
            </div>
          </form>
    
        <Footer />
    
      </div>
    )
  }
}

const mapDispatchToProps = {
  signup
}

export default connect(
  null,
  mapDispatchToProps
)(Signup)
