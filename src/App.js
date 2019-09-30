// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './view/create.component';
import Edit from './view/edit.component';
import Index from './view/index.component';
import Food from './foodblog';
import Showapi from './show_api';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                 <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/food'} className="nav-link">food</Link>
                </li>
                 <li className="nav-item">
                  <Link to={'/shw_api'} className="nav-link">Show Api</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React This is written in App.js </h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/food' component={ Food } />
              <Route path='/shw_api' component={ Showapi } />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;