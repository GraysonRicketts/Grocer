import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../../styles/Login.css'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import { login } from './../../actions/userActions'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientEmail: null,
      clientPassword: null
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLogin(event) {
    const { login } = this.props
    const email = this.state.clientEmail
    const password = this.state.clientPassword
    
    login(email, password)
  }

  handleEmailChange(event) {
    const clientEmail = event.target.value
    this.setState({clientEmail})
  }

  handlePasswordChange(event) {
    const clientPassword = event.target.value
    this.setState({clientPassword})
  }

  render() {
    const { clientEmail, clientPassword } = this.state
    const { email: storeEmail, isLoggedIn } = this.props
    return (
      <div className="wrapper">
        <Header title={'Login'} email={storeEmail} isLoggedIn={isLoggedIn}/>

          <div className='login'>
            <form>

              <div className="standardInput">
                <div>
                  <label>Email</label>
                  <input name='email' value={clientEmail ? clientEmail : ''} type="text" onChange={this.handleEmailChange}/>
                </div>

                <div>
                  <label>Password</label>
                  <input name='password' value={clientPassword ? clientPassword : ''} type="password" onChange={this.handlePasswordChange}/>
                </div>

                <div className='loginButton'>
                  <input type="button" value="Login" onClick={this.handleLogin}/>
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

function mapStateToProps(state) {
  return {
    email: state.user.email,
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
