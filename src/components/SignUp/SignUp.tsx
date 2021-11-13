import React, {useEffect, useState} from 'react';
import './SignUp.scss';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {InputType} from "../../types/types";
import Input from "../Input/Input";

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

    const inputs: Array<InputType> = [
        {
            type: 'text',
            placeholder: 'Username',
            errorMessage: usernameError || 'Username must contain 3-20 characters',
            errors: userErrors,
            registerInput: registerUsername,
            inputLabel: 'Username'
        },
        {
            type: 'email',
            placeholder: 'Email address',
            errorMessage: emailError || 'Please, enter a valid email',
            errors: emailErrors,
            registerInput: registerEmail,
            inputLabel: 'Email address'
        },
        {
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password must contain 6-40 characters',
            errors: passwordErrors,
            registerInput: registerPassword,
            inputLabel: 'Password'
        },
        {
            type: 'password',
            placeholder: 'Repeat password',
            errorMessage: ' Password do not match',
            errors: confirmPassword,
            registerInput: registerConfirmPassword,
            inputLabel: 'Repeat Password'
        }
    ]

    return (
        <form
            className='create-acc'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className='create-acc__title'>
                Create new account
            </h3>
            {inputs.map(i =>
                <Input
                    registerInput={i.registerInput}
                    errors={i.errors}
                    type={i.type}
                    errorMessage={i.errorMessage}
                    inputLabel={i.inputLabel}
                    placeholder={i.placeholder}
                    className={i.className}
                />
            )}
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
