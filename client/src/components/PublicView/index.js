import React from 'react'
import SignInLink from '../SignInLink'
import TopUser from '../TopUser'
import { Link } from 'react-router-dom';
import NewFooter from '../NewFooter';
import AppBar from '@material-ui/core/AppBar';

const backGroundStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '100vh',
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
const signInStyle = {
    width: '300px',
    textAlign: 'center',
    backgroundColor: 'rgb(63,81,181)'
}
const titleDivStyle = {
    // border: '1px white solid',
    borderRadius: '3px',
    width: '60%',
    height: '400px',
    // float: 'left',
    marginLeft: '20%',
    textAlign: 'left'
}


export default function PublicView() {
    return (
        <div style={backGroundStyle}>
            <div>
            <div style={titleDivStyle}>
            <h1 style={titleStyle}>Git<span style={clubStyle}>Club</span></h1>
            <h2 style={descStyle}>An app for GitHub users that provides insight and data on their activity in a fun social environment.</h2>
            <a href={"http://localhost:3001/auth/github"}>
            <img src="/assets/images/githubsignonbutton.png" /></a>
            </div>
        </div>       
        </div> 
    )
}
