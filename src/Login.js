import React from 'react';

import './Login.css';
import Footer from './Footer';
import Header from './Header';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">

        <Header title={'Login'}/>

          <div>
            <form>

              <div>
                <label>Email</label>
                <input type="text"/>
              </div>

              <div>
                <label>Password</label>
                <input type="password"/>
              </div>

              <input type="button" value="Facebook"/>
              <input type="button" value="Google"/>

            </form>
          </div>

        <Footer />

      </div>
    );
  }
}

export default Login;
