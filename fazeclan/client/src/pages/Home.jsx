import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Layout/Wrapper'
import ActiveUserDisplay from '../components/Layout/ActiveUserDisplay'
import TopUser from '../components/Layout/TopUser'
import UserFavorites from '../components/Layout/UserFavorites'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <ActiveUserDisplay />
          <UserFavorites />
          <TopUser />
        </div>
      </Wrapper>
    );
  }
}

export default Home;
