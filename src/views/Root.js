import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Recipes from './Recipes';

class Root extends Component {

  render(){

    return(
      <div className="App">
        <h2>siemanko</h2>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Root;
