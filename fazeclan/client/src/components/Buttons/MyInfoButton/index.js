import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const buttonStyle = {
    position: 'relative',
    width: '200px',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%'
  };

export default class MyInfoButton extends Component {
    render() {

  return (
    <div>
      <Button  component={Link} to={'/userinfo'} variant="contained" color="primary" style={buttonStyle}>
        My Info
      </Button>
    </div>
  );
}
}