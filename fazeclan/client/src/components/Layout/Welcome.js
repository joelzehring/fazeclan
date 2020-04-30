import React from 'react'
import FormModal from '../UserForm/FormModal'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Overall Page Style
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
    maxWidth: '200px'
  };

// Buttons Parent Style
const buttonParentStyle = {
    marginBottom: '28px'
  };

// Log In Style
const logInStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

// Log In Div Style
const logInDivStyle = {
    marginBottom: '20px'
  };

// Paragraph Style
const paragraphStyle = {
    paddingLeft: '100px',
    paddingRight: '70px'
  };

// Temporary button Styles
const buttonStyles = {
    position: 'relative',
    width: '200px',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%'
  };

// App Info Information
 function Welcome() {
    return (
            
            <div className="row active-user" style={activeUserStyle}>
                <div className="col-sm-3" >
                    <div >
                        <img src={ require('../../images/gitclub_logo_round.svg') } style={activeUserInfoStyle} />
                    </div>
                    
                </div>
                <div className="col-sm-6" >
                    <p style={paragraphStyle}>
                        Welcome to Git Club! Git Club is something something, mackeral, chopped liver, bacon grease, dish detergent. 
                    </p>
                    <p style={paragraphStyle}>
                        With Git Club you can something something, mayonnaise, blue waffle, car parts, dingleberry. 
                    </p>
                </div>
                <div className="col-sm-3" style={logInStyle}>
                    <div style={logInDivStyle}>
                        <h5>Returning Users</h5>
                        <Button variant="contained" color="primary" style={buttonStyles}>
                            Sign In
                        </Button>
                    </div>
                    <div style={logInDivStyle}>
                        <h5>New User</h5>
                    <Button variant="contained" color="primary" style={buttonStyles}>
                        Register
                    </Button>
                    </div>
                </div>
                <br />
                
            </div>
        
    )
}
export default Welcome;