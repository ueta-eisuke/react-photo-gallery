
import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keyword: '' } 
  }

  onChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  onClick = () => {
    this.props.search(this.state.keyword);
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.search(this.state.keyword);
    }
  }

  render() {
    return (
      <InputGroup>
        <Input 
          type="search" 
          name="search" 
          placeholder="Enter Keyword!"
          onChange={(e) => this.onChange(e)}
          onKeyPress={(e) => this.onKeyPress(e)} 
          >
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="dark" onClick={() => this.onClick()} >
            <FaSearch />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default SearchBox;