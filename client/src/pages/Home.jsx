import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Wrapper'
import ActiveUserDisplay from '../components/ActiveUserDisplay'
import TopUser from '../components/TopUser'
import UserFavorites from '../components/UserFavorites'
import { AuthContext } from '../contexts/AuthContext';
import PublicView from '../components/PublicView/'
class Home extends Component {
  render() {
    return (
      <div className="container">
        <Wrapper>
          <AuthContext.Consumer>{(context) => {
            const { authenticated } = context;
            return (
              authenticated ? <div>
                <ActiveUserDisplay />
                <UserFavorites />
                <TopUser />
                
              </div> : <PublicView />
            )
          }}
          </AuthContext.Consumer>
        </Wrapper>
      </div>
    );
  }
}
export default Home;