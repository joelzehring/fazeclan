import React, { Component } from 'react';
import '../App.css';


class Search extends Component {

    componentidMount() {
        console.log(this.props.location);
    }


    updateBadges() {
        const commitCount = this.state.searchedUser.contributionsCollection && this.state.searchedUser.contributionsCollection.totalCommitContributions
        const followerCount = this.state.searchedUser.followers.totalCount;
        const repoCount = this.state.searchedUser.repositories.totalCount;
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
            <div></div>
        )
    }
}

export default Search