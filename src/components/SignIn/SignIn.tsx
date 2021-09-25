import React from 'react';
import {Link} from 'react-router-dom';
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
                type="email" className="sign-in__input"/>
            <p className="sign-in__label">
                Password
            </p>
            <input
                placeholder='Password'
                type="password" className="sign-in__input sign-in__input-password"/>
            <button className="sign-in__btn btn btn__for-modal btn__primary-bg">Login</button>
            <p className='sign-in__text'>
                Don’t have an account?
                <Link to={'/sign-up'} className='link'>
                    Sign Up.
                </Link>
            </p>
        </div>
    );
}

export default SignIn;
