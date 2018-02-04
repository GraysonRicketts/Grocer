import React from 'react';

import './Signup.css';
import Footer from './Footer';
import Header from './Header';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">

        <Header title={'Sign up'}/>

          <div>
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

            <div>
              <input type="button" value="Facebook"/>
              <input type="button" value="Google"/>
            </div>

            <div>
              <input type="submit" value="Sign up"/>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default Signup;
