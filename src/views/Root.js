import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import About from './About';
import Recipes from './Recipes';
import Contact from './Contact';
import routes from '../routes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }
`

class Root extends Component {

  render(){

    return(
      <div className="App">
        <GlobalStyle/>
        <Router>
          <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.about} component={About} />
          <Route path={routes.recipes} component={Recipes} />
          <Route path={routes.contact} component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Root;
