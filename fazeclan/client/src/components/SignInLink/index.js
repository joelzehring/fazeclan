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
          authenticated: true,
          activeUser: res.user.name
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
    const auth = this.state.authenticated;
    return (
      <div>
        <a style={this.state.pStyle} href={ (auth) ? "http://localhost:3001/auth/logout" : "http://localhost:3001/auth/github" }>{ (auth) ? this.state.activeUser + " (logout)": "Sign In" } </a>
      </div>
    )
  }

}

export default SignInLink;