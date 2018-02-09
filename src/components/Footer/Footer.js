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
        <footer>
          © {this.state.year} Grayson Ricketts
        </footer>
      </div>
    );
  }
}

export default Footer;
