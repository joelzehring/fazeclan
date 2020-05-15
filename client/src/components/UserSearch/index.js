import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from '../../utils/api';

class UserSearch extends React.Component {

  state = {
    searchedUser: {},
    toSearch: false,
    search: ""
  }

  handleChange = (event) => {
    event.preventDefault();
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
      return <Redirect to={{
        pathname: '/search',
        state: { searchedUser: this.state.searchedUser }
      }} />
    }
        return (
          <div>
            <form className="form-inline my-2 my-lg-0">
              <input name="search" className="form-control mr-sm-2" type="search" value={this.state.search} onChange={this.handleChange} placeholder="Enter a GitHub username" aria-label="Search" />
              <button onClick={this.handleSubmit} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Submit</button>
            </form>
          </div>
        )
    }
  }

  export default UserSearch