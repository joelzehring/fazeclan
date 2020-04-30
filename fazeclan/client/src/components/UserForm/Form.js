import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'

export class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        favoriteLanguage: '',
        occupation: '',
        city: '',
        bio: ''
    }
    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Return to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    render() {
        const { step } = this.state;
        const { firstName, favoriteLanguage, occupation, city, bio } = this.state;
        const values = { firstName, favoriteLanguage, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default Form
