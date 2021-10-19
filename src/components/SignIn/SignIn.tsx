import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './SignIn.scss';
import {useForm} from 'react-hook-form';

type Props = {
    signIn: (email: string, password: string) => void
    emailError: string
    passwordError: string
    isFetching: boolean
    invalidAuth: string
    resetErrors: () => void
}

const SignIn = (props: Props) => {

    const {signIn, isFetching, emailError, passwordError, invalidAuth, resetErrors} = props

    useEffect(()=> {
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

    const passwordErrors = passwordError || errors.password
    const emailErrors = emailError || errors.email

    return (
        <form
            className='sign-in'
            onSubmit={handleSubmit(onSubmit)}>
            <h3 className='sign-in__title'>
                Sign In
            </h3>
            <p className='sign-in__label'>
                Email address
            </p>
            <input
                placeholder='Email address'
                type='email'
                className={`${emailErrors ? 'input-error' : ''} sign-in__input`}
                {...registerEmail}/>
            {emailErrors && <span className='error-label'>
              {emailError || 'Введите корректный email'}
            </span>}
            <p className='sign-in__label'>
                Password
            </p>
            <input
                placeholder='Password'
                type='password'
                className={`${passwordErrors ? 'input-error' : ''} sign-in__input`}
                {...registerPassword}/>
            {passwordErrors && <span className='error-label'>
             {passwordError || 'Пароль должен быть от 6 до 40 символов'}
            </span>}

            {invalidAuth && <div className='error-label'>
             {invalidAuth}
            </div>}
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
