import React, { Component, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

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
            <div>
                {(this.context.oneHundredCommits)
                            ? (
                                <div className="badge" key={1}>
                                    <h4>100 Commits</h4>
                                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.twoFiftyCommits)
                            ? (
                                <div className="badge" key={2}>
                                    <h4>250 Commits</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                             {(this.context.fiveHundredCommits)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>500 Commits</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.oneThousandCommits)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>1000 Commits</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.tenFollowers)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>10 Followers</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.twentyFiveFollowers)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>25 Followers</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.fiftyFollowers)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>50 Followers</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                             {(this.context.tenRepos)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>10 Repos</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.twentyFiveRepos)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>25 Repos</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
                            {(this.context.fiftyRepos)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>50 Repos</h4>
                                    <img src="..." alt="100commits" />
                                </div>
                            ) : <div></div>}
            </div>
        );
    }
}
Badges.contextType = AuthContext;

export default Badges;