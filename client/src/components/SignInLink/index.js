import React, { Component, useContext } from "react";
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';


function SignInLink() {

  return (
    <AuthContext.Consumer>
      {value => (
        <a href={ (value.authenticated) ? "/auth/logout ": "/auth/github" }>{ (value.authenticated) ? value.activeUser + " (logout)": "Sign In" } </a>
      )}
    </AuthContext.Consumer>
  )

}

export default SignInLink;