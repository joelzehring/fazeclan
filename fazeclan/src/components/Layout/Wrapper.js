import React from "react";
import Search from './Search'
const Logo = require('./gitclub_logo.png');


const containerStyle = {
    padding: '0px'
}

const logoStyle = {
    width: '150px'
}

const navStyle = {
    borderBottom: '3px, white',
    backgroundColor: '303030'
}

function Wrapper(props) {
  return (
    <>
      <div className="container-fluid" style={containerStyle}>
        <div className="navbar gc_nav" style={navStyle}>
          
          
          <a className="title" href="/">
            <img className="logo" style={logoStyle} src={Logo} alt=""/>
          </a>
          
          <div>
            {Search}
          </div>
        </div>
        
        <div className={`wrapper ${props.class}`}>{props.children}
        </div>
      </div>
      
    </>
  );
}

export default Wrapper;