import React from 'react';
import './CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className='create-acc'>
            <h3 className='create-acc__title'>
                Create new account
            </h3>
            <p className="create-acc__label">
                Username
            </p>
            <input
                placeholder='Username'
                type="text" className="create-acc__input"/>
            <p className="create-acc__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="email" className="create-acc__input"/>
            <p className="create-acc__label">
                Password
            </p>
            <input
                placeholder='Password'
                type="password" className="create-acc__input"/>
            <p className="create-acc__label">
                Repeat Password
            </p>
            <input
                placeholder='Password'
                type="password" className="create-acc__input create-acc__input-password"/>
            <div className='create-acc__line'></div>
            <div className="create-acc__agree">
                <label>
                    <input type="checkbox"/>
                    I agree to the processing of my personal information
                </label>
            </div>
            <button className="create-acc__btn btn btn__for-modal btn__primary-bg">
                Create
            </button>
            <p className='create-acc__text'>
                Already have an account? <
                a href="#" className='link'>Sign In.</a>
            </p>
        </div>
    );
}

export default CreateAccount;
