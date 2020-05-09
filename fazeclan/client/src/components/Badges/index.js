import React, { Component, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

class Badges extends Component {
    componentDidMount() {
        const { badges } = this.context;
        console.log("initial badges: ", badges);

    }

    componentDidUpdate() {
        const { badges } = this.context;
        console.log("updated badges: ", badges);
    }

    render() {
        return (
            <div>
                <AuthContext.Consumer>{(context) => {
                    const { badges } = context;
                    console.log("render: ", badges);
                    console.log(badges.oneHundredCommits);
                    return (
                        (badges.oneHundredCommits)
                            ? (
                                <div className="badge" key={1}>
                                    <h4>100 Commits</h4>
                                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
                                </div>
                            ) : <div>?</div>
                    )
                }
                }
                </AuthContext.Consumer>
            </div>
        );
    }
}
Badges.contextType = AuthContext;

export default Badges;