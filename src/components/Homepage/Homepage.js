import React from 'react';

import './Homepage.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">

        <Header title={''}/>

          <div className='home'>
            <h1>
              Grocery shopping made easy
            </h1>

            <div className="subTitleArea">
              <h3>
                We're focused on making the trip to the grocery store effortless.
              </h3>

              <input type="submit" value="Sign up for free"/>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default Signup;
