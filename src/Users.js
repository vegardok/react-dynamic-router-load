import React from 'react';
import _ from 'lodash';
import hljs from 'highlight.js';

const Users = () => {
  return (
    <>
      <h2>Users </h2>
      <span>Inc highlight.js and lodash v {_.VERSION}</span>
    </>
  );
};
export default Users;
