import React from 'react';

import './../../styles/Homepage.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

const pStyle = {
  fontSize: '1.2rem', 
  padding: '5px 10px', 
  borderRadius: '5px', 
  width: '10rem',
  backgroundColor: 'green',
  margin: '0 auto',
  textAlign: 'center'
}

const Homepage = () => (
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

          <div>
            <a href="/signup" style={{textDecoration: 'none', color: 'white'}}>
              <p style={pStyle}>Sign up for free</p>
            </a>
          </div>
        </div>
      </div>

    <Footer />

  </div>
)

export default Homepage;
