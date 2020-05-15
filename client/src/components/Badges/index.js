import React, { Component, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

//blue: '#4155AD'
const cardParent = {
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '10px',
    marginBottom: '10px',
}

const cardedStyle = {
    color: 'black',
    border: 'rgb(63,81,181)',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    backgroundColor: 'white',
}

const badgeStyle = {
    width: '100%',
    display: 'block',
    // borderRadius: '20px',
    margin: 'auto',
}

class Badges extends Component {
    componentDidMount() {
        console.log("initial: ", this.context);

    }

    componentDidUpdate() {
        console.log("updated: ", this.context);
    }

    //TODO: add images to a package.json and add paths to each badge image
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 commit-badges" style={cardParent}>
                    <div className="carded" style={cardedStyle}>
                        <div className="card-body text-center">
                            <div className="col-sm-12">
                                <h3>Commits: {this.context.userProfile.contributionsCollection && this.context.userProfile.contributionsCollection.totalCommitContributions}</h3>
                            </div>

                            <div className="row">
                                {(this.context.oneHundredCommits)
                                    ? (
                                        <div className="col-sm-6 badge text-center" key={1}>
                                            <img src="/assets/images/commit-badge-100.png" alt="100commits" style={badgeStyle} />
                                        </div>

                                    ) : <div></div>}
                                {(this.context.twoFiftyCommits)
                                    ? (
                                        <div className="col-sm-6 badge text-center" key={2}>
                                            <img src="/assets/images/commit-badge-250.png" alt="250commits" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                            </div>
                            <div className="row">
                                {(this.context.fiveHundredCommits)
                                    ? (
                                        <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/commit-badge-500.png" alt="500commits" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                                {(this.context.oneThousandCommits)
                                    ? (
                                        <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/commit-badge-1000.png" alt="1000commits" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 followers-badges" style={cardParent}>
                    <div classname="row carded" style={cardedStyle}>
                        <div className="card-body text-center">
                            <div className="col-sm-12">
                                <h3>Followers: {this.context.userProfile.followers && this.context.userProfile.followers.totalCount}</h3> </div>
                            <div className="row">
                                {(this.context.tenFollowers)
                                    ? (
                                        <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/follower-badge-10.png" alt="10followers" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                                {(this.context.twentyFiveFollowers)
                                    ? (
                                        <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/follower-badge-25.png" alt="25followers" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                            </div>
                            <div className="row">
                                {(this.context.fiftyFollowers)
                                    ? (
                                        <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/follower-badge-50.png" alt="50followers" style={badgeStyle} />
                                        </div>
                                    ) : <div></div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 repo-badges" style={cardParent}>
                    <div className="row carded" style={cardedStyle}>
                        <div className="card-body text-center">
                            <div className="col-sm-12">
                                <h3>Repos: {this.context.userProfile.repositories && this.context.userProfile.repositories.totalCount}</h3></div>
                                <div className="row">
                            {(this.context.tenRepos)
                                ? (
                                    <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/repo-badge-10.png" alt="10repos" style={badgeStyle} />
                                        </div>
                                ) : <div></div>}
                            {(this.context.twentyFiveRepos)
                                ? (
                                    <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/repo-badge-25.png" alt="25repos" style={badgeStyle} />
                                        </div>
                                ) : <div></div>}
                                </div>
                                <div className="row">
                            {(this.context.fiftyRepos)
                                ? (
                                    <div className="badge text-center col-sm-6" key={3}>
                                            <img src="/assets/images/repo-badge-50.png" alt="50repos" style={badgeStyle} />
                                        </div>
                                ) : <div></div>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Badges.contextType = AuthContext;

export default Badges;