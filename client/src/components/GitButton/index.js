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

export default class GitButton extends Component {
    render() {

  return (
    <div>
      <Button target="_blank" href="https://github.com/joelzehring/fazeclan" variant="contained" color="primary" style={buttonStyle}>Github Repo</Button>
    </div>
  );
}
}