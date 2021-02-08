import React from 'react';
import './sign-in-and-sign-up-page.styles.scss';
import SignIn from '../../Components/Sign-In/sign-In';
import SignUp from '../../Components/Sign-Up/sign-up';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;