import React from 'react'
import FormModal from '../UserForm/FormModal';
import GitBattleButton from '../UserForm/GitBattleButton';
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../contexts/AuthContext";
import UserGraph from '../UserGraph'
const activeUserStyle = {
    color: 'rgb(63,81,181)',
    border: 'rgb(63,81,181)',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    padding: '50px',
    marginTop: '30px',
    marginLeft: '20px',
    // marginRight: '20px',
    marginBottom: '10px'
    // width: '30%'
}
const removePadding = {
    padding: '0px',
    marginRight: '40px'
}

const activeUserInfoStyle = {
    textAlign: 'left'
};
const rowStyle = {
    marginBottom: '50px'
}

// Buttons Parent Style
const buttonParentStyle = {
    marginBottom: '28px'
};

// Temporary button Styles
const buttonStyles = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%'
};

// Image Styles
const imageStyles = {
    position: 'relative',
    // width: '50%',
    margin: '0 auto'
};

// Active User's Information
function ActiveUser(props) {
    const { userProfile } = props;
    console.log("userprofile: ", userProfile);
    return (

        <div className="row" style={rowStyle}>
            <div className="col-sm-12 col-md-3" style={activeUserStyle}>
                {/* {console.log(userProfile.name)} */}
                <h2>{userProfile.name}</h2>
                {/* <h3>Total Commits: {userProfile.contributionsCollection && userProfile.contributionsCollection.totalCommitContributions}</h3> */}
                <p>{userProfile.bio}</p>
                <div className="profile-pic-holder" style={imageStyles}>
                    <img className='card-img' src={userProfile.avatarUrl} alt="Profile pic" />
                </div>

            </div>
            <div className="col-sm-12 col-md-7" style={removePadding}>
                <UserGraph userProfile={userProfile} />
            </div>
            <br />
        </div>

    )
    // return (
    //     <AuthContext.Consumer>
    //         {(context) => {
    //             const { userProfile } = context;
    //             return (
    //                 <div className="row" style={rowStyle}>
    //                     <div className="col-sm-12 col-md-3"  style={activeUserStyle}>
    //                         {/* {console.log(userProfile.name)} */}
    //                         <h2>{userProfile.name}</h2>
    //                         {/* <h3>Total Commits: {userProfile.contributionsCollection && userProfile.contributionsCollection.totalCommitContributions}</h3> */}
    //                         <p>{userProfile.bio}</p>
    //                         <div className="profile-pic-holder" style={imageStyles}>
    //                             <img className='card-img' src={userProfile.avatarUrl} alt="Profile pic" />
    //                         </div>

    //                     </div>                           
    //                      <div className="col-sm-12 col-md-7" style={removePadding}>
    //                             <UserGraph />
    //                         </div>
    //                     <br />
    //                 </div>
    //             )
    //         }}
    //     </AuthContext.Consumer>
    // )
}
export default ActiveUser;