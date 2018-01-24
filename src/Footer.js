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
    const style = {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center'
    }

    return (
      <footer className="footer" style={style}>
        © {this.state.year}: Grayson Ricketts
      </footer>
    );
  }
}

export default Footer;
