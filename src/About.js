import React from 'react';
import _ from 'lodash';
import * as d3 from 'd3';

const About = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>About</h2>
        <span>
          This view includes d3 v {d3.version} and lodash v {_.VERSION}
        </span>
      </div>
    </div>
  );
};
export default About;
