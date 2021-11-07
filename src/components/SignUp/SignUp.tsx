import React, {useEffect, useState} from 'react';
import './SignUp.scss';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import classNames from "classnames";

type Props = {
    signUp: (username: string, email: string, password: string) => void
    usernameError: string
    emailError: string
    passwordError: string
    isFetching: boolean
    resetErrors: () => void
}

const SignUp = (props: Props) => {

    const {
        signUp, isFetching,
        usernameError,
        emailError,
        passwordError, resetErrors
    } = props

    useEffect(() => {
        resetErrors()
    }, [])

    const [confirmPassword, setConfirmPassword] = useState('')
    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const registerEmail = {
        ...register('email', {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        })
    }
    const registerPassword = {
        ...register('password', {
            required: true,
            minLength: 5,
            maxLength: 40
        })
    }
    const registerConfirmPassword = {
        ...register('confirmPassword', {
            required: true,
        })
    }
    const registerUsername = {
        ...register('username', {
            required: true,
            minLength: 3,
            maxLength: 20
        })
    }
    const onSubmit = (data: any) => {
        if (data.password !== data.confirmPassword) {
            setConfirmPassword('Password must match')
            return
        }
        setConfirmPassword('')
        const {username, email, password} = data
        signUp(username, email, password)
    }

    const userErrors = usernameError || errors.username
    const passwordErrors = passwordError || errors.password
    const emailErrors = emailError || errors.email

    return (
        <form
            className='create-acc'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className='create-acc__title'>
                Create new account
            </h3>
            <p className="create-acc__label">
                Username
            </p>
            <input
                placeholder='Username'
                type="text"
                className={classNames({
                    "create-acc__input": true,
                    'input-error': userErrors
                })}
                {...registerUsername}
            />
            {(userErrors) && <span className='error-label'>
                {usernameError || 'Username must contain 3-20 characters'}
            </span>}

            <p className="create-acc__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="email"
                className={`${emailErrors ? 'input-error' : ''} create-acc__input`}
                {...registerEmail}/>
            {emailErrors && <span className='error-label'>
              {emailError || 'Please, enter a valid email'}
            </span>}

            <p className="create-acc__label">
                Password
            </p>
            <input
                placeholder='Password'
                type="password"
                className={`${passwordErrors ? 'input-error' : ''} create-acc__input`}
                {...registerPassword}/>
            {passwordErrors && <span className='error-label'>
             {passwordError || 'Password must contain 6-40 characters'}
            </span>}

            <p className="create-acc__label">
                Repeat Password
            </p>
            <input
                placeholder='Password'
                type="password" className="create-acc__input"
                {...registerConfirmPassword}/>
            {confirmPassword && <span className='error-label'>
              Password do not match
            </span>}

            <div className='create-acc__line'/>
            <div className="create-acc__agree">
                <label>
                    <input type="checkbox" className='create-acc__checkbox'/>
                    I agree to the processing of my personal information
                </label>
            </div>
            <button
                className="create-acc__btn btn btn__for-modal btn__primary-bg"
                type='submit'
                disabled={isFetching}
            >
                Create
            </button>
            <p className='create-acc__text'>
                Already have an account?
                <Link to={'/sign-in'} className='link'>
                    Sign In.
                </Link>
            </p>
        </form>
    );
}

export default SignUp;
