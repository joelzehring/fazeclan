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
    textAlign: 'center'
  };

export default class GitButton extends Component {
    render() {

  return (
    <div>
      <Button href="http://localhost:3001/auth/logout" variant="contained" color="primary" style={buttonStyle}>Logout</Button>
    </div>
  );
}
}