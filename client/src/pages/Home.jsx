import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Wrapper'
import TopUser from '../components/TopUser'
import UserFavorites from '../components/UserFavorites'
import { AuthContext } from '../contexts/AuthContext';
import PublicView from '../components/PublicView/'
import PrivateView from '../components/PrivateView'
class Home extends Component {
  render() {
    return (
      <div className="container">
        
          <AuthContext.Consumer>{(context) => {
            const { authenticated } = context;
            return (
              authenticated ? <div>
                <PrivateView />
                
              </div> : <PublicView />
            )
          }}
          </AuthContext.Consumer>
        
      </div>
    );
  }
}
export default Home;