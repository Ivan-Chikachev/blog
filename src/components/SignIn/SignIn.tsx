import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './SignIn.scss';
import {useForm} from 'react-hook-form';
import Input from '../Input/Input';
import {InputType} from "../../types/types";

type Props = {
    signIn: (email: string, password: string) => void
    isFetching: boolean
    invalidAuth: string
    resetErrors: () => void
}

const SignIn = (props: Props) => {

    const {signIn, isFetching, invalidAuth, resetErrors} = props

    useEffect(() => {
        resetErrors()
    }, [])

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
    const onSubmit = (data: any) => {
        const {email, password} = data
        signIn(email, password)
    }

    const inputs: Array<InputType> = [
        {
            type: 'email',
            placeholder: 'Email address',
            errorMessage: 'Please, enter a valid email',
            errors: errors.email,
            registerInput: registerEmail,
            inputLabel: 'Email address'
        },
        {
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password must contain 6-40 characters',
            errors: errors.password,
            registerInput: registerPassword,
            inputLabel: 'Password'
        }
    ]

    return (
        <form
            className='sign-in'
            onSubmit={handleSubmit(onSubmit)}>
            <h3 className='sign-in__title'>
                Sign In
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
            {invalidAuth &&
                <div className='error-label'>
                    {`Email or password ${invalidAuth}`}
                </div>
            }
            <button
                className='sign-in__btn btn btn__for-modal btn__primary-bg'
                type={'submit'}
                disabled={isFetching}
            >
                Login
            </button>
            <p className='sign-in__text'>
                Don’t have an account?
                <Link to={'/sign-up'} className='link'>
                    Sign Up.
                </Link>
            </p>
        </form>
    );
}

export default SignIn;
