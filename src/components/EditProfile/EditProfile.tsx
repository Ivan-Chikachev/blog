import React, {useState} from 'react';
import './EditProfile.scss';
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {UpdateUserType} from "../../types/types";
import {Redirect} from "react-router-dom";

type props = {
    updateUser: (user: UpdateUserType) => void
    isLoading: boolean
    username: string
}

const EditProfile = ({updateUser, isLoading, username}: props) => {

    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const [isRedirect, setIsRedirect] = useState(false)

    if (isRedirect) {
        return <Redirect to="/articles/page/1"/>
    }

    const onSubmit = (data: any) => {
        const {username, avatar, email} = data
        const user: UpdateUserType = {
            username: username,
            bio: '',
            email: email,
            image: avatar,
            token: ''
        }
        updateUser(user)
        setIsRedirect(true)
    }

    const registerUsername = {
        ...register('username', {
            required: true,
            minLength: 2,
            maxLength: 40,
            value: username
        })
    }
    const registerAvatar = {
        ...register('avatar', {
            required: true,
            minLength: 5,
        })
    }
    const registerEmail = {
        ...register('email', {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
                type="email"
                className={classNames({
                    "edit-profile__input": true,
                    'input-error': errors.email
                })}
                {...registerEmail}
            />
            {errors.email && <span className='error-label'>
              Введите корректный email
            </span>}
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
