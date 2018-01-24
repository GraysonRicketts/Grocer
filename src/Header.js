import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Search from './Search';

class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop={true}>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">{this.props.groceryListName}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Grocery Lists
            </NavItem>
            <NavItem eventKey={3} href="#">
              Acount
            </NavItem>
            <NavItem eventKey={4} href="#">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        <Search />
      </Navbar>
    );
  }
}

export default Header;
