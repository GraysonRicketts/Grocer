import React from 'react';

import './Account.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

const Account = () => (
  <div className="wrapper">

    <Header title={'Account'}/>

    <div className='account'>
      <header>
        Edit your account
      </header>
      
      <div className="updateEmail">
        <form>
          <div>
            <label>Email</label>
            <input type="email"/>
          </div>

          <button type="submit">Update email</button>
        </form>
      </div>

      <div className="updatePassword">
        <form>
          <div>
            <label>Password</label>
            <input type="password" placeHolder="Password"/>
            <input type="password"placeHolder="Re-enter password"/>
          </div>

          <button type="submit">Update password</button>
        </form>
      </div>

    </div>

    <Footer />

  </div>
)

export default Account;
