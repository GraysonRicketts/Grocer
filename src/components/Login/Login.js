import React from 'react';

import './Login.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">

        <Header title={'Login'}/>

          <div className='login'>
            <form>

              <div className="standardInput">
                <div>
                  <label>Email</label>
                  <input type="text"/>
                </div>

                <div>
                  <label>Password</label>
                  <input type="password"/>
                </div>

                <div className='loginButton'>
                  <input type="submit" value="Login"/>
                  <div className="create">
                    <a href='#'><p>Create an account</p></a>
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
    );
  }
}

export default Login;
