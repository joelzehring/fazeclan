import React from 'react'
import Header from '../Header/index'
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
            <h1>Welcome to GitClub</h1><h3>A place for friends.  Sign in with GitHub to see how you rank. <SignInLink /> </h3>
            <TopUser />
        </div>
    )
}
