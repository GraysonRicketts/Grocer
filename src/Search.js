import React from 'react';

import { form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderText: "Search",
    }
  }

  render() {
    const style = {
      gridRow: 2
    }

    return (
      <form style={style}>
        <FormGroup bsSize="sm">
          <InputGroup>
            <FormControl type="text" placeholder={this.state.placeholderText}/>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default Search;
