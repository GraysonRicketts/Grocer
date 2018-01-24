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
    return (
      <form>
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
