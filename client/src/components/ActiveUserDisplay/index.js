import React from 'react'
import FormModal from '../UserForm/FormModal';
import GitBattleButton from '../UserForm/GitBattleButton';
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../contexts/AuthContext";

// Overall Page Style
const activeUserStyle = {
    color: 'white',
    border: 'white',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    padding: '50px',
    marginTop: '30px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '10px'
}

const activeUserInfoStyle = {
    textAlign: 'center'
};

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
    width: '100%',
    margin: '0 auto'
};

// Active User's Information
function ActiveUser() {
    return (
        <AuthContext.Consumer>
            {(context) => {
                const { userProfile } = context;
                return (
                    <div className="row active-user" style={activeUserStyle}>
                        <div className="col-sm-3" style={activeUserInfoStyle}>
                            {console.log(userProfile.name)}
                            <h2>{userProfile.name}</h2>
                            <h3>Total Commits: {userProfile.contributionsCollection && userProfile.contributionsCollection.totalCommitContributions}</h3>
                            <p>{userProfile.bio}</p>
                        </div>
                        <div className="col-sm-6" style={buttonParentStyle}>
                            <Button variant="contained" color="primary" style={buttonStyles}>
                                Github
                            </Button>
                            <Button variant="contained" color="primary" style={buttonStyles}>
                                Git Stats
                            </Button>
                            <GitBattleButton />
                            <FormModal />
                        </div>
                        <div className="col-sm-3">
                            <div className="profile-pic-holder" style={imageStyles}>
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