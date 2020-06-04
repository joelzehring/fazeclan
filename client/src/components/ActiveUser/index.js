import React from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import './ActiveUser.css'

//This Component Displays the Signed in Users photo Name and github Bio
function ActiveUser() {
    return (
        <AuthContext.Consumer>
            {(context) => {
                const { userProfile } = context;
                return (
                    <div className="row active-user" >
                        <div className="col-sm-12" >
                            <h2>{userProfile.name}</h2>
                            <p>{userProfile.bio}</p>
                        </div>
                        <div className="col-sm-12">
                            <div className="profile-pic-holder" >
                                <img className="card-img" src={userProfile.avatarUrl} alt="Profile pic" />
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