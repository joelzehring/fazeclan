import React, { createContext, Component } from 'react';
import API from "../utils/api";


export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    authenticated: false,
    activeUser: "",
    error: null,
    userProfile: {}

  }

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:3001/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(res => {
        this.setState({
          authenticated: true,
          activeUser: res.user.name
        }, () => {
          API.getGraphQL(this.state.activeUser)
            .then(results => {
              console.log("results: ", results);
              // console.log("results: ", results.data.data.user);
              this.setState({
                userProfile: results.data.data.user
              })
            })
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider;