import React from 'react';
import './EditProfile.scss';
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {UpdateUserType} from "../../types/types";

type props = {
    updateUser: (user: UpdateUserType) => void
    isLoading: boolean
}

const EditProfile = ({updateUser, isLoading}: props) => {

    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const onSubmit = (data: any) => {
        const {username, avatar} = data
        const user: UpdateUserType = {
            username: username,
            bio: '',
            email: '',
            image: avatar,
            token: ''
        }
        updateUser(user)
    }

    const registerUsername = {
        ...register('username', {
            required: true,
            minLength: 2,
            maxLength: 40
        })
    }
    const registerAvatar = {
        ...register('avatar', {
            required: true,
            minLength: 5,
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='edit-profile'>
            <h3 className='edit-profile__title'>
                Edit Profile
            </h3>
            <p className="edit-profile__label">
                Username
            </p>
            <input
                placeholder='Username'
                type="text"
                className={classNames({
                    "edit-profile__input": true,
                    'input-error': errors.username
                })}
                {...registerUsername}
            />
            <p className="edit-profile__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="email" className="edit-profile__input"/>
            {/*<p className="edit-profile__label">*/}
            {/*    New password*/}
            {/*</p>*/}
            {/*<input*/}
            {/*    placeholder='New password'*/}
            {/*    type="password"*/}
            {/*    className={classNames({*/}
            {/*        "edit-profile__input": true,*/}
            {/*        'input-error': errors.p*/}
            {/*    })}*/}
            {/*/>*/}
            <p className="edit-profile__label">
                Avatar image (url)
            </p>
            <input
                placeholder='Avatar image'
                type="text"
                className={classNames({
                    "edit-profile__input": true,
                    "edit-profile__input-avatar": true,
                    'input-error': errors.avatar
                })}
                {...registerAvatar}/>
            <button
                disabled={isLoading}
                type='submit'
                className="edit-profile__btn btn btn__for-modal btn__primary-bg">
                Save
            </button>
        </form>
    );
}

export default EditProfile;
