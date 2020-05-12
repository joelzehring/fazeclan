import React from 'react'
import { AuthContext } from "../../contexts/AuthContext";
// Overall Page Style

// Active User's Information
function ActiveUser() {
    return (
        <AuthContext.Consumer>
            {(context) => {
                const { userProfile } = context;
                return (
                    <div className="row active-user" >
                        <div className="col-sm-12" >
                            {console.log(userProfile.name)}
                            <h2>{userProfile.name}</h2>
                            <h3>Total Commits: {userProfile.contributionsCollection && userProfile.contributionsCollection.totalCommitContributions}</h3>
                            <p>{userProfile.bio}</p>
                        </div>
                        <div className="col-sm-12">
                            <div className="profile-pic-holder" >
                                <img className='card-img' src={userProfile.avatarUrl} alt="Profile pic" />
                            </div>
                        </div>
                        <br />
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}
export default ActiveUser;