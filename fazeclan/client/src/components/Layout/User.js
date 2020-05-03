import React, { Component, useContext } from 'react';
import API from "../../utils/API";
import ActiveUser from "./ActiveUser";
import { AuthContext } from '../../contexts/AuthContext';


class User extends Component {

    static contextType = AuthContext;

    state = {
        userInfo: [],
        githubRes: [],
        badges: [],
        activeUser: ""
    }

    componentDidMount() {
        let value = this.context;
        console.log(value);
    }

    searchGithub = (activeUser) => {

        API.searchUser(activeUser)
            .then(response => {
                console.log(response.data);
                this.setState({ githubRes: response.data });
            })
            .catch(err => console.log(err));


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

        API.updateUser(activeUser, this.state.badges).then(response => {
            console.log(response.data);
        })
            .catch(err => console.log(err));
    };

    findUser = (activeUser) => {
        API.getUser(activeUser).then(response => {
            console.log(response.data);
            this.setState({ userInfo: response.data })
                .catch(err => console.log(err));

        })
    }


    //mongo db.find function to grab all the user data (with updated badges) and display in component

    render() {
        return (
                <ActiveUser 
                name = {this.state.activeuser}
                />
        )
    }
}

export default User;
