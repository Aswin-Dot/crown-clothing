import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../Custom-Button/custom-button';
import { signInWithGoogle } from '../../Firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({ email:'', password:'' });
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }
    
    render() {
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn