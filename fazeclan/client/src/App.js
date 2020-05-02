import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Battle from './pages/Battle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/battle">
            <Battle />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
