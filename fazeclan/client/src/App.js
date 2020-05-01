import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Layout/Wrapper'
import Welcome from './components/Layout/Welcome'
import TopUser from './components/Layout/TopUser'
import UserFavorites from './components/Layout/UserFavorites'
import User from './pages/User';

class App extends Component {
  render() {
    return (
        <Wrapper>
          <div className="container">
            <Welcome />
            <User />
            <UserFavorites />
            <TopUser />
          </div>
        </Wrapper>
    );
  }
}

export default App;
