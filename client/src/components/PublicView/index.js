import React from 'react'
import SignInLink from '../SignInLink'
import TopUser from '../TopUser'
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
export default function PublicView() {
    return (
        <div>
            <h1>Welcome to GitClub</h1>
            <div><h4> Sign in with github to see your stats, earn badges, and see how you stack up to other users. </h4>
            <a href="http://localhost:3001/auth/github">
            <img src="/assets/images/githubicon.png" alt="github icon click to sign in"/>
        </a>
        </div>
        </div>
    )
}
