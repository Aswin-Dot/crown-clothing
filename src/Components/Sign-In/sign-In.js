import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../Form-Input/form-input';
import CustomButton from '../Custom-Button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../Redux/user/user-action'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { emailSignInStart } = this.props
        const { email, password } = this.state
        
        emailSignInStart(email, password);
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }
    
    render() {

        const { googleSignInStart } = this.props;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} className="">
                    <FormInput 
                        name='email' 
                        type='email'
                        label='email'
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)