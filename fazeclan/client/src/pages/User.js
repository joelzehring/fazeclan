import React, { Component } from 'react';
import API from "../utils";

class User extends component {
    state = {
        userID: [], //should be able to get this from state??
        badges: [],
        githubRes: []
    }

    // componentDidMount() {
    //     API.searchUser("kimberlycase91")
    //       .then(response => {
    //         console.log(response.data);
    //         this.setState({ githubRes: response.data });
    //       })
    //   };

    searchGithub = id => {
        API.searchUser(id)
            .then(response => {
                console.log(response.data);
                this.setState({ githubRes: response.data });
            });

        const commitCount = this.state.githubRes.userInfo[0].data.viewer.contributionsCollection.totalCommitContributions;

        const followerCount = this.state.githubRes.userInfo[0].data.user.followers.totalCount;

        const repoCount = this.state.githubRes.userInfo[0].data.user.repositories.totalCount;

        if (commitCount >= 100) {
            this.state.badges.oneHundredcommits = true;
        }
        if (commitCount >= 200) {
            this.state.badges.twoHundredcommits = true;
        }
        if (commitCount >= 500) {
            this.state.badges.fiveHundredcommits = true;
        }
        if (followerCount >= 5) {
            this.state.badges.fiveFollowers = true;
        }
        if (followerCount >= 10) {
            this.state.badges.tenFollowers = true;
        }
        if (followerCount >= 20) {
            this.state.badges.twentyFollowers = true;
        }
        if (repoCount >= 10) {
            this.state.badges.tenRepos = true;
        }
        if (repoCount >= 50) {
            this.state.badges.fiftyRepos = true;
        }
        console.log(this.state.badges);

        API.updateUser(this.state.badges).then(response => {
            console.log(response.data);
            this.setState({ githubRes: response.data });
        });
    };

    

    //mongo db.find function to grab all the user data (with updated badges) and display in component

    render() {
    
    }
}

//example api response:
// const userInfo = [{
//     data: {
//       viewer: {
//         login: "sharkrachel",
//         contributionsCollection: {
//           totalCommitContributions: 450
//         }
//       },
//       user: {
//         bio: "I am a Full Stack Developer with a background in marketing and business operations. I love anything JS, React and Node!",
//         followers: {
//           totalCount: 11
//         },
//         name: "Rachel Sipes",
//         avatarUrl: "https://avatars2.githubusercontent.com/u/54150830?u=33968e0495c8ff8b2044d015c7a4ab34ec1ec24c&v=4",
//         repositories: {
//           totalCount: 32
//         }
//       }
//     }
//   }];

