import React from "react";
import Navbar from '../Navbar';
const Logo = require('../../images/gitclub_logo.png');



// Container Styles
const containerStyle = {
    padding: '0px',
    backgroundRepeat: 'round',
    backgroundSize: 'cover'
}

// Body Styles
const bodyStyle = {
  height: '100vh'
}

// Logo Styles
const logoStyle = {
    width: '150px'
}

// Nav Styles
const navStyle = {
    borderBottom: '3px, white',
    backgroundColor: '303030'
}

// Page
function Wrapper(props) {
  return (
    <>
      <div className="container-fluid" style={containerStyle}>
        <div className="body" >
          <Navbar />
          <div className={`wrapper ${props.class}`}>{props.children}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Wrapper;