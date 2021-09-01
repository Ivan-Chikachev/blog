import React from 'react';
import './EditProfile.scss';

const EditProfile = () => {
    return (
        <div className='edit-profile'>
            <h3 className='edit-profile__title'>
                Edit Profile
            </h3>
            <p className="edit-profile__label">
                Username
            </p>
            <input
                placeholder='Username'
                type="text" className="edit-profile__input"/>
            <p className="edit-profile__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="email" className="edit-profile__input"/>
            <p className="edit-profile__label">
                New password
            </p>
            <input
                placeholder='New password'
                type="password" className="edit-profile__input"/>
            <p className="edit-profile__label">
                Avatar image (url)
            </p>
            <input
                placeholder='Avatar image'
                type="text" className="edit-profile__input edit-profile__input-avatar"/>
            <button className="edit-profile__btn btn btn__for-modal btn__primary-bg">
                Save
            </button>
        </div>
    );
}

export default EditProfile;
