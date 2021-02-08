import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../Form-Input/form-input';
import CustomButton from '../Custom-Button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../Redux/user/user-action'

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
    
    const [credentials, setCredentials] = useState({ email:'', password:'' })

    const { email, password } = credentials

    const handleSubmit = async e => {
        e.preventDefault();
        
        
        emailSignInStart(email, password);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setCredentials({...credentials, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} className="">
                <FormInput 
                    name='email' 
                    type='email'
                    label='email'
                    handleChange={handleChange} 
                    value={email} 
                    required />
                <FormInput 
                    name='password' 
                    type='password' 
                    label='password'
                    handleChange={handleChange} 
                    value={password} 
                    required />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)