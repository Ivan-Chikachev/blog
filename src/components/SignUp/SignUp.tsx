import React, {useEffect, useState} from 'react';
import './SignUp.scss';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {InputType} from "../../types/types";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";
import {resetErrors, signUp} from "../../redux/Auth/authActions";

const SignUp = () => {

    const [confirmPassword, setConfirmPassword] = useState('')
    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const usernameError = useSelector<AppStateType, string>(state => state.auth.errors.username[0])
    const emailError = useSelector<AppStateType, string>(state => state.auth.errors.email[0])
    const passwordError = useSelector<AppStateType, string>(state => state.auth.errors.password[0])
    const isFetching = useSelector<AppStateType, boolean>(state => state.auth.isFetching)

    const dispatch = useDispatch()
    const signUpp = (username: string, email: string, password: string) =>
        dispatch(signUp(username, email, password))

    useEffect(() => {
        dispatch(resetErrors())
    }, [])

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
        signUpp(username, email, password)
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
            inputLabel: 'Repeat password'
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
                    key={i.inputLabel}
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
