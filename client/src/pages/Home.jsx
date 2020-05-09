import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Wrapper'
import ActiveUserDisplay from '../components/ActiveUserDisplay'
import TopUser from '../components/TopUser'
import UserFavorites from '../components/UserFavorites'

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
