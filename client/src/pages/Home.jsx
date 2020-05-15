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
import Search from '../components/Search';
import { Redirect } from 'react-router-dom';
import UserSearch from '../components/UserSearch';

class Home extends Component {
  state = {
    search: "",
    searchedUser: {},
    toSearch: false
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
        this.setState({
          toSearch: true
        })
        console.log("search result: ", this.state.searchedUser);
      })
  }
  
  render() {
    if (this.state.toSearch === true) {
      return <Redirect to='/search' />
    }
    return (
      <div>
          <AuthContext.Consumer>{(context) => {
            const { authenticated } = context
            return (
              authenticated ? 
              <div className="container">
              <div>
                <Wrapper />
                <UserGraph />
                <Badges />
                <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search}/>
                <UserSearch />
                <PrivateView />
              </div>
              </div>
              : <PublicView />
            )
          }}
          </AuthContext.Consumer>
      </div>
    )
  }
}
export default Home;