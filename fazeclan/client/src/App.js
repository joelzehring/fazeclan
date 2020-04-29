import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Layout/Wrapper'
import Welcome from './components/Layout/Welcome'
import TopUser from './components/Layout/TopUser'
import UserFavorites from './components/Layout/UserFavorites'

class App extends Component {
  render() {
    return (
        <Wrapper>
          <div className="container">
            <Welcome />
            <UserFavorites />
            <TopUser />
          </div>
        </Wrapper>
    );
  }
}

export default App;
