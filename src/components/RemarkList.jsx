import React, { Component } from 'react';
import {observer} from 'mobx-react';
import remark from '../context/remark';

@observer
class RemarkList extends Component {
  render() {
    return (
      <ul>
        {remark.remarks.map(item=>(
          <li>{item}
            <span onClick={() => remark.deleteRemark(item)}>删除</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default RemarkList;