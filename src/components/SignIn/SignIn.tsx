import React from 'react';
import {Link} from 'react-router-dom';
import './SignIn.scss';
import {useForm} from 'react-hook-form';

type Props = {
    signIn: (email: string, password: string) => void
}

const SignIn = ({signIn} : Props) => {

    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const registerEmail = {
        ...register('email',{
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        })
    }
    const registerPassword = {
        ...register('password',{
            required: true,
            minLength: 5,
            maxLength: 40
        })

    }
    const onSubmit = (data: any) => {
        const {email, password} = data
        console.log(email, password)
        signIn(email, password)
    }

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
                className={`${errors.email? 'input-error' : ''} sign-in__input`}
                {...registerEmail}/>
            {errors.email && <span className='error-label'>
              Введите корректный email
            </span>}
            <p className='sign-in__label'>
                Password
            </p>
            <input
                placeholder='Password'
                type='password'
                className={`${errors.password? 'input-error' : ''} sign-in__input`}
                {...registerPassword}/>
            {errors.password && <span className='error-label'>
              Пароль должен быть от 6 до 40 символов
            </span>}
            <button
                className='sign-in__btn btn btn__for-modal btn__primary-bg'
                type={'submit'}
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
