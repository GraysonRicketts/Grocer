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
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
      padding: '1rem',
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
