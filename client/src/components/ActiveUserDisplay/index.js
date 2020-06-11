import React from 'react'
import FormModal from '../UserForm/FormModal';
import GitBattleButton from '../UserForm/GitBattleButton';
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../contexts/AuthContext";
import UserGraph from '../UserGraph'
import './ActiveUserDisplay.css'

// Active User's name profile and photo
function ActiveUser(props) {
    const { userProfile } = props;
    console.log("userprofile: ", userProfile);
    return (

        <div className="row rs">
            <div className="col-sm-12 col-md-3 aus">
                <h2>{userProfile.name}</h2>
                <p>{userProfile.bio}</p>
                <div className="profile-pic-holder">
                    <img className='card-img' src={userProfile.avatarUrl} alt="Profile pic" />
                </div>
            </div>
            <div className="col-sm-12 col-md-7 rp">
                <UserGraph userProfile={userProfile} />
            </div>
            <br />
        </div>
    )
}
export default ActiveUser;