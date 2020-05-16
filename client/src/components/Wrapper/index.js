import React from "react";
import Navbar from '../Navbar';
import SearchAppBar from '../SearchAppBar'
const Logo = require('../../images/gitclub_logo.png');



// Container Styles
const containerStyle = {
  padding: '0px',
  backgroundRepeat: 'round',
  backgroundSize: 'cover',
  backgroundColor: '#E0DFE0'
}

// Body Styles
const bodyStyle = {
  // height: '100vh',
  backgroundColor: '#E0DFE0'
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
      <SearchAppBar />
      <div style={bodyStyle}>

        <div className="container-fluid" style={containerStyle}>
          <div className="body" >

            <div className={`wrapper ${props.class}`}>{props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;