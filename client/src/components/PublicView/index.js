import React from 'react'
import SignInLink from '../SignInLink'
import TopUser from '../TopUser'

const backGroundStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '1000px',
    margin: '0px',
    paddingTop: '15%'
}
const titleStyle = {
    color: 'black',
    fontSize: '64px'
}
const clubStyle = {
    color: 'rgb(63,81,181)',
    fontSize: '64px'
}
const descStyle = {
    color: 'black',
    fontSize: '32px'
}
const signInDivStyle = {
    border: '1px white solid',
    borderRadius: '3px',
    width: '300px',
    height: '350px',
    float: 'right',
    marginRight: '25%',
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black'
}
const titleDivStyle = {
    // border: '1px white solid',
    borderRadius: '3px',
    width: '600px',
    height: '400px',
    float: 'left',
    marginLeft: '20%',
    textAlign: 'left'
}

export default function PublicView() {
    return (
        <div style={backGroundStyle}>
            <div>
            <div style={titleDivStyle}>
            <h1 style={titleStyle}>Git<span style={clubStyle}>Club</span></h1>
            <h2 style={descStyle}>An app for GitHub users that provides insight and data on their activity in a fun social environment. Created by Alfred Joel Kimberly Phil and Rachel...</h2>
            </div>
            <div style={signInDivStyle}><h4> Sign in with github</h4>
            <a href="http://localhost:3001/auth/github">
            <img src="/assets/images/githubicon.png" alt="github icon click to sign in"/>
        </a>
        </div>
        </div>
        </div>
    )
}
