import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';



const buttonStyle = {
    position: 'relative',
    width: '100%',
    margin: '2px auto',
    display: 'block',
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'rgb(63,81,181)'
  };

  const containerStyle = {
    margin: '0px 6px'
  }

export default class GitBattleButton extends Component {
    render() {

  return (
    <div style={containerStyle}>
      <Button  component={Link} to={'/battle'} variant="contained" color="secondary" style={buttonStyle}>
        Git Battle
      </Button>
    </div>
  );
}
}