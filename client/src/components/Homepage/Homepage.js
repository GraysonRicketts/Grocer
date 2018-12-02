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

    <Header />

      <div className='home'>
        <h1>
          This is a grocery list
        </h1>

        <div>
            <a href="/signup" style={{textDecoration: 'none', color: 'white'}}>
              <p style={pStyle}>Sign up for free</p>
            </a>
          </div>

        <div className="subTitleArea">
          <h3>
            Add some things to your grocery list, go to the store, check those things off, 
            buy those things, take 'em home, eat those things. This is a grocery list. Get you
            the things you need to not be hungry. 
          </h3>

          <h3>
            Oh yeah, tell your Mom, tell your Dad, tell your sister, tell your neighbor, tell 
            your friend about us. We worked hard to make this simple thing easy to use and 
            want to make technology around food our full time job. Support a small business or 
            hopefully support us once we're a large business. Do what you want. Make an igloo. I've
            always wanted to but failed horribly when I was four so I've never tried again. It's hard; 
            so maybe don't make an igloo but you should tell your Mom, tell your Dad, tell your
            sister, tell your neighbor, tell your friend. Maybe they'll like us a enough to throw a 
            candy bar's worth of money our way so we can leave our boring jobs and make fun things for you.
          </h3>

        </div>
      </div>

    <Footer />

  </div>
)

export default Homepage;
