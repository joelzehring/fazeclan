import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Battle from './pages/battle';
import AuthContextProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    
    return (
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}>
              <Wrapper>
              <Home />
              </Wrapper>
            </Route>
            <Route path="/battle">
            <Wrapper>
              <Battle />
            </Wrapper> 
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
      
    );
  }
}

export default App;
