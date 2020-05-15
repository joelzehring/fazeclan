import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Battle from './pages/battle';
import AuthContextProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper'
import NewFooter from './components/NewFooter'
import Search from './pages/Search';

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}>
              <Home />
            </Route>
            <Route path="/battle">
            <Wrapper>
              <Battle />
            </Wrapper> 
            </Route>
            <Route path="/search" >
            <Wrapper>
              <Search />
            </Wrapper> 
            </Route>
          </Switch>
          <NewFooter />
        </Router>
      </AuthContextProvider>
      
    );
  }
}

export default App;
