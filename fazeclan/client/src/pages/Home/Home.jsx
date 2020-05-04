import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Layout/Wrapper'
import ActiveUser from '../components/Layout/ActiveUser'
import TopUser from '../components/Layout/TopUser'
import UserFavorites from '../components/Layout/UserFavorites'

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <div className="container">
            <ActiveUser />
            <UserFavorites />
            <TopUser />
            { console.log('hello') }
          </div>
        </Wrapper>
    );
  }
}

export default Home;
