/* eslint no-unused-vars: 0 */

import React from 'react';
import _ from 'lodash';
import hljs from 'highlight.js';

const Users = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Users </h2>
        <span>
          This view highlight.js and lodash v {_.VERSION}
        </span>
      </div>
    </div>
  );
};
export default Users;
