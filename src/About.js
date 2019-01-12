import React from 'react';
import _ from 'lodash';
import * as d3 from 'd3';

const About = () => {
  return (
    <>
      <h2>About</h2>
      <span>Inc d3 v ${d3.version} and lodash v {_.VERSION}</span>
    </>
  );
};
export default About;
