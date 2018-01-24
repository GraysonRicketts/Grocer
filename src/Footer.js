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
      gridRow: 4
    }

    return (
      <footer className="footer" style={style}>
        © {this.state.year}: Grayson Ricketts
      </footer>
    );
  }
}

export default Footer;
