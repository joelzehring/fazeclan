import React, { Component } from 'react';
import '../App.css';
import Wrapper from '../components/Layout/Wrapper'
import ActiveUserDisplay from '../components/Layout/ActiveUserDisplay'
import TopUser from '../components/Layout/TopUser'
import UserFavorites from '../components/Layout/UserFavorites'
import API from "../utils/api"
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext';

class Home extends Component {
  // load data from graphQL database
  static contextType = AuthContext;
  state = {
    userProfile: {},

  }

  componentDidMount() {
    let value = this.context;
    if (value.authenticated) {
      console.log("this.context: ", value);
      API.getGraphQL(value.activeUser)
        .then(results => {
          console.log("results: ", results.data.data.user);
          this.setState({
            userProfile: results.data.data.user
          })
        })
    }
  }


  render() {

    let value = this.context;
    console.log("render value: ", this.context);
    return (
      <Wrapper>
        <div className="container">
          <ActiveUserDisplay userProfile={this.state.userProfile} />
          <UserFavorites />
          <TopUser />

        </div>
      </Wrapper>
    );
  }
}

export default Home;
