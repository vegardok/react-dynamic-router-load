import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

const Index = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Dynamic view load demo. This view includes React and react-router.
      </p>
    </header>
  </div>
);

const Loading = () => (
  <div className="App">
    <div className="App-header">
      <span>Loading asynchronous view...</span>
    </div>
  </div>
)

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">View 1</Link>
      </li>
      <li>
        <Link to="/users/">View 2</Link>
      </li>
      <li>
        <a href="https://github.com/vegardok/react-dynamic-router-load">Github repo</a>
      </li>
    </ul>
  </nav>
)

const load = C => () => <Suspense fallback={<Loading/>}><C/></Suspense>;
const Users = load(lazy(() => import(/* webpackChunkName: "users" */ './Users')))
const About = load(lazy(() => import(/* webpackChunkName: "about" */'./About')))

class App extends Component {
  render() {
    return (
      <Router basename="/react-dynamic-router-load">
        <div>
          <Nav />
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;