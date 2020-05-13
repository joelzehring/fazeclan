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
    border: 'black',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    backgroundColor: 'white'
}

const badgeStyle = {
    width: '200px',
    borderRadius: '20px',
    margin: '0 auto',
    marginTop: '20px'
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
                    <div className="row carded" style={cardedStyle}>
                        <div className="card-body text-center">
                            <div className="col-sm-12">
                                <h3>Total Commits: {this.context.userProfile.contributionsCollection && this.context.userProfile.contributionsCollection.totalCommitContributions}</h3>
                            </div>
                            {(this.context.oneHundredCommits)
                                ? (
                                    <div className="badge text-center" key={1}>
                                        <div className="col-sm-6" style={badgeStyle}>
                                            <img src="..." alt="100commits" />
                                            </div>
                                            </div>
                                                ) : <div></div>}
                                            {(this.context.twoFiftyCommits)
                                                ? (
                                                    <div className="badge text-center" key={2}>
                                                        <div className="col-sm-6" style={badgeStyle}>
                                                            <img src="..." alt="250commits" />
                                                        </div>
                                                    </div>
                                                ) : <div></div>}
                                            {(this.context.fiveHundredCommits)
                                                ? (
                                                    <div className="badge text-center" key={3}>
                                                        <div className="col-sm-6" style={badgeStyle}>
                                                            <img src="..." alt="500commits" />
                                                        </div>
                                                    </div>
                                                ) : <div></div>}
                                            {(this.context.oneThousandCommits)
                                                ? (
                                                    <div className="badge text-center" key={3}>
                                                        <div className="col-sm-6" style={badgeStyle}>
                                                            <img src="..." alt="1000commits" />
                                                        </div>
                                                    </div>
                                                ) : <div></div>}
                                        </div>
                                    </div>
                    </div>


                        <div className="col-lg-4 followers-badges" style={cardParent}>
                            <div classname="row carded" style={cardedStyle}>
                                <div className="card-body text-center">
                                    <div className="col-sm-12">
                                        <h3>Total Followers: {this.context.userProfile.followers && this.context.userProfile.followers.totalCount}</h3> </div>
                                    {(this.context.tenFollowers)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>
                                                <img src="..." alt="10followers" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                    {(this.context.twentyFiveFollowers)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>
                                                <img src="..." alt="25followers" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                    {(this.context.fiftyFollowers)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>
                                                <img src="..." alt="50followers" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 repo-badges" style={cardParent}>
                            <div className="row carded" style={cardedStyle}>
                                <div className="card-body text-center">
                                    <div className="col-sm-12">
                                        <h3>Total Repos: {this.context.userProfile.repositories && this.context.userProfile.repositories.totalCount}</h3></div>
                                    {(this.context.tenRepos)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>
                                                <img src="..." alt="10repos" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                    {(this.context.twentyFiveRepos)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>
                                                <img src="..." alt="25repos" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                    {(this.context.fiftyRepos)
                                        ? (
                                            <div className="badge text-center" key={3}>
                                                <div className="col-sm-6" style={badgeStyle}>                                                
                                                <img src="..." alt="50repos" />
                                                </div>
                                            </div>
                                        ) : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}
Badges.contextType = AuthContext;

export default Badges;