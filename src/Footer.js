import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    const d = new Date();

    this.state = {
      year: d.getFullYear()
    }
  }
  render() {
    return (
      <div className="footer">
      
      </div>
      // <Grid fluid={true}>
      //   <Row>
      //     <p style={{textAlign: "center"}}>
      //       © {this.state.year}: Grayson Ricketts
      //     </p>
      //   </Row>
      // </Grid>
    );
  }
}

export default Footer;
