import React, { Component } from "react";

class SignInLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      activeUser: "",
      error: null,
      pStyle: { color: "white"}
    }
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
          authenticated: false,
          activeUser: res.user.name
        });
      })
      .catch(error => {
        this.setState({
          authenticated: true,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    return (
      <div>
        <p style={this.state.pStyle}>{ (this.state.authenticated) ? this.state.activeUser : "Sign In" } </p>
      </div>
    )
  }

}

export default SignInLink;