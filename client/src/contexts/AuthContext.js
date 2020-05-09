import React, { createContext, Component } from 'react';
import API from "../utils/api";


export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    authenticated: false,
    activeUser: "",
    error: null,
    userProfile: {},
    // badges: {
    //   oneHundredCommits: false,
    //   twoHundredCommits: false,
    //   threeHundredCommits: false
    // }
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
              });
              this.updateBadges();
            })
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  };

  updateBadges () {
  const commitCount = this.state.userProfile.contributionsCollection.totalCommitContributions;
  const followerCount = this.state.userProfile.followers.totalCount;
  const repoCount = this.state.userProfile.repositories.totalCount;
  if (commitCount >= 100) {
    this.setState({ oneHundredCommits: true });
  }
  if (commitCount >= 250) {
    this.setState({ twoFiftyCommits: true });
  }
  if (commitCount >= 500) {
    this.setState({ fiveHundredCommits: true });
  }
  if (commitCount >= 1000) {
    this.setState({ oneThousandCommits: true });
  }
  if (followerCount >= 10) {
    this.setState({ tenFollowers: true });
  }
  if (followerCount >= 25) {
    this.setState({ twentyFiveFollowers: true });
  }
  if (followerCount >= 50) {
    this.setState({ fiftyFollowers: true });
  }
  if (repoCount >= 10) {
    this.setState({ tenRepos: true });
  }
  if (repoCount >= 25) {
    this.setState({ twentyFiveRepos: true });
  }
  if (repoCount >= 50) {
    this.setState({ fiftyRepos: true });
  }
  

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