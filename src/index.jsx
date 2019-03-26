import React from 'react';
import { render } from 'react-dom';

import AddRemark from './components/AddRemark';
import RemarkList from './components/RemarkList';

import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <AddRemark />
        <RemarkList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
