import React, { Component } from 'react';
import '../App.css';
import { AuthContext } from '../contexts/AuthContext';
import PublicView from '../components/PublicView/';
import PrivateView from '../components/PrivateView';
import UserGraph from "../components/UserGraph";
import ActiveUserDisplay from "../components/ActiveUserDisplay";
import TopUser from "../components/TopUser";
import UserFavorites from "../components/UserFavorites";
import Wrapper from "../components/Wrapper";
import Badges from "../components/Badges";
import API from '../utils/api';

const backgroundStyle = {
  backgroundColor: 'white'
}
class Home extends Component {
  state = {
    search: "",
    searchedUser: {}
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    API.getGraphQL(this.state.search)
      .then((result) => {

        this.setState({
          searchedUser: result.data.data.user
        })
        console.log("search result: ", result);
      })
  }
  render() {
    return (
      <div style={backgroundStyle}>
          <AuthContext.Consumer>{(context) => {
            const { authenticated } = context;
            return (
              authenticated ? 
              <div>
              <div>
                <Wrapper />
                <div className="container">
                <Badges />
                <ActiveUserDisplay />
                {/* <UserGraph /> */}
                <PrivateView />
                </div>
              </div>
              </div>
              : <PublicView />
            )
          }}
          </AuthContext.Consumer>
      </div>
    );
  }
}
export default Home;