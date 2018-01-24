import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col, Checkbox } from 'react-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

import importedData from './data.json'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderText: "Search",
    }
  }

  render() {
    return (
      <form>
        <FormGroup bsSize="large">
          <InputGroup>
            <FormControl type="text" placeholder={this.state.placeholderText}/>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

class Header extends Component {
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

class Footer extends Component {
  constructor(props) {
    super(props);

    const d = new Date();

    this.state = {
      year: d.getFullYear()
    }
  }
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <p style={{textAlign: "center"}}>
            © {this.state.year}: Grayson Ricketts
          </p>
        </Row>
      </Grid>
    );
  }
}

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: importedData.items
    };
  }

  render() {
    let categories = {};
    this.state.items.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      let categoryList = categories[item.category];

      categoryList.push(item);
    });

    const list = [];
    for(let category in categories) {
      const items = categories[category]
      category = (<Category categoryName={category} items={items} key={category}/>);
      list.push(category);
    }

    return (
      <div className="grocery-list" style={{paddingTop:"115px"}}>
        {list}
      </div>
    );
  }
}

class Category extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <Item itemName={item.itemName}
        size={item.size}
        quantity={item.quantity}
        key={item._id}/>
      );
    });

    const categoryName = this.props.categoryName;

    return (
      <Row>
        <Col>
          <h4 className="row">
            {categoryName}
          </h4>

          {items}
        </Col>
      </Row>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      color: '#FFF'
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active,
      color: (prevState.active ? '#FFF' : '#333')
    }));
  }

  render() {
    const itemName = this.props.itemName;
    const size = this.props.size;
    const quantity = this.props.quantity;

    const active = this.state.active;
    const color = this.state.color;

    return (
      <Row style={{backgroundColor: color}}>
        <Col xs={8}>
          <Row>
            {itemName}
          </Row>
          <Row>
            {size}
          </Row>
        </Col>
        <Col xs={4}>
          {quantity} <Checkbox onClick={this.handleClick} active={active.toString()}/>
        </Col>
      </Row>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Grid>

        <Header groceryListName="Grayson's List" />

        <GroceryList />

        <Footer />

      </Grid>
    );
  }
}

export default App;
