import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import Home from './Home';
import About from './About';
import Recipes from './Recipes';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import Contact from './Contact';
import MyAccount from './MyAccount';
import routes from '../routes';
import store from '../store'

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

// window.store = store;
class Root extends Component {

  render(){
    return(
      <Provider store={store}>
        <GlobalStyle/>
        <Router>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.recipes} component={Recipes} />
            <Route path={routes.recipe} component={Recipe} />
            <Route path={routes.addRecipe} component={AddRecipe} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.myAccount} component={MyAccount} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default Root;
