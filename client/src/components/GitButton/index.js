import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import SignInLink from ''


const buttonStyle = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'rgb(63,81,181)'
  };

  const containerStyle = {
    margin: '0px 6px'
  }
export default class GitButton extends Component {
    render() {

  return (
    <div style={containerStyle}>
      <Button href="/auth/logout" variant="contained" color="primary" style={buttonStyle}>Logout</Button>
    </div>
  );
}
}