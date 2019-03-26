import React, { Component } from 'react';
import { Input } from 'antd';

import remark from '../context/remark';

const Search = Input.Search;

class AddRemark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <Search
        value={this.state.value}
        onChange={e => this.handleInputChange(e)}
        placeholder="input remark here"
        enterButton="Add"
        size="large"
        onSearch={value => { remark.addRemark(value); this.setState({ value: '' }); }}
      />
    );
  }
}

export default AddRemark;