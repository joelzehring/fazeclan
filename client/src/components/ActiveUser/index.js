import React from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import './ActiveUser.css'
// Overall Page Style

// Active User's Information
function ActiveUser() {

    const imgStyle = {
        width: 200,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 100,
    }

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