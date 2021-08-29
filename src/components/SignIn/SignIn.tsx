import React from 'react';
import './SignIn.scss';

const SignIn = () => {
    return (
        <div className='sign-in'>
            <h3 className='sign-in__title'>
                Sign In
            </h3>
            <p className="sign-in__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="text" className="sign-in__input"/>
            <p className="sign-in__label">
                Password
            </p>
            <input
                placeholder='Password'
                type="text" className="sign-in__input sign-in__input-password"/>
            <button className="sign-in__btn btn btn__medium btn__primary-bg">Login</button>
            <p className='sign-in__sign-up'>
                Don’t have an account? <
                a href="#" className='sign-in__link'>Sign Up.</a>
            </p>
        </div>
    );
}

export default SignIn;
