import React, { Component, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

const Badges = () => {
    const { badges } = useContext(AuthContext);
    console.log(badges);
    return (
        badges.oneHundredCommits ? 
        <div className="badge" key={1}>
            <h4>100 Commits</h4>
            <img href="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
        </div> : <div></div>
    )
}

// class Badges extends Component {
//     render() {
//     return (
//         <div>
//         <AuthContext.Consumer>{(context) => {
//             const { badges } = context;
//             console.log(badges);
//             if (badges.oneHundredCommits === true) {
//                 return (
//                     <div className="badge" key={1}>
//                         <h4>100 Commits</h4>
//                         <img href="https://cdn.iconscout.com/icon/premium/png-256-thumb/award-1723733-1464635.png" alt="100commits" />
//                     </div>
//                 )
//             }
//         }}
//         </AuthContext.Consumer>
//         </div>
//     );
//     }
// }

export default Badges;