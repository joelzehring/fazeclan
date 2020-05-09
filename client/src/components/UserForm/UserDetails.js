import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <MuiThemeProvider>
                <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Favorite Language"
                        floatingLabelText="Language"
                        onChange={handleChange('favoriteLanguage')}
                        defaultValue={values.favoriteLanguage}
                    />
                    <br />
                    <TextField
                        hintText="Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    onClick={this.continue}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default UserDetails
