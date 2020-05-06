import React, { Component, useContext } from "react";
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';

function SignInLink() {

  return (
    <AuthContext.Consumer>
      {value => (
        <a href={ (value.authenticated) ? "http://localhost:3001/auth/logout" : "http://localhost:3001/auth/github" }>{ (value.authenticated) ? value.activeUser + " (logout)": "Sign In" } </a>
      )}
    </AuthContext.Consumer>
  )

}

export default SignInLink;