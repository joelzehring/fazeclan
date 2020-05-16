import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const buttonStyle = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: 'papayawhip'
  };

export default class GitBattleButton extends Component {
    render() {

  return (
    <div>
      <Button  component={Link} to={'/battle'} variant="contained" color="primary" style={buttonStyle}>
        Git Battle
      </Button>
    </div>
  );
}
}