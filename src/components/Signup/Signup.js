import React from 'react';

import './Signup.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

const Signup = () => (
  <div className="wrapper">

    <Header title={'Sign up'}/>

      <div className='signup'>
        <div>
          <label>Email</label>
          <input type="text"/>
        </div>

        <div>
          <label>Password</label>
          <input type="password"/>
        </div>

        <div>
          <label>Re-enter Password</label>
          <input type="password"/>
        </div>

        <div className="signupSubmit">
          <input type="submit" value="Sign up"/>
          <a href="/login">
            <p>Already have an account? Login</p>
          </a>
        </div>
      </div>

    <Footer />

  </div>
)

export default Signup;
