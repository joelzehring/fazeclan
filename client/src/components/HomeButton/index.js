import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const buttonStyle = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%',
    textAlign: 'center'
  };

export default class HomeButton extends Component {
    render() {

  return (
    <div>
      <Button  component={Link} to={'/'} variant="contained" color="primary" style={buttonStyle}>
        Home
      </Button>
    </div>
  );
}
}