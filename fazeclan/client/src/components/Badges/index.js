import React, { Component, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

class Badges extends Component {
    componentDidMount() {
        console.log("initial: ", this.context);

    }

    componentDidUpdate() {
        console.log("updated: ", this.context);
    }


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
                            {(this.context.twoHundredCommits)
                            ? (
                                <div className="badge" key={2}>
                                    <h4>200 Commits</h4>
                                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
                                </div>
                            ) : <div></div>}
                             {(this.context.threeHundredCommits)
                            ? (
                                <div className="badge" key={3}>
                                    <h4>300 Commits</h4>
                                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
                                </div>
                            ) : <div></div>}
            </div>
        );
    }
}
Badges.contextType = AuthContext;

export default Badges;