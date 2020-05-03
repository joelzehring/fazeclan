import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Layout/Wrapper';
import TopUser from '../components/Layout/TopUser';
import UserFavorites from '../components/Layout/UserFavorites';
import User from '../components/Layout/User';

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <div className="container">
            <User />
            <UserFavorites />
            <TopUser />
            { console.log('hello') }
          </div>
        </Wrapper>
    );
  }
}

export default Home;
