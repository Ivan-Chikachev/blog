import React, {useState} from 'react';
import './SignUp.scss';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

type Props = {
    signUp: (username: string, email: string, password: string) => void
}

const SignUp = ({signUp} : Props) => {

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
                className={`${errors.username? 'input-error' : ''} create-acc__input`}
                {...registerUsername}
            />
            {errors.username && <span className='error-label'>
              Имя должно быть от 3 до 20 символов
            </span>}

            <p className="create-acc__label">
                Email address
            </p>
            <input
                placeholder='Email address'
                type="email"
                className={`${errors.email? 'input-error' : ''} create-acc__input`}
                {...registerEmail}/>
            {errors.email && <span className='error-label'>
              Введите корректный email
            </span>}
            <p className="create-acc__label">
                Password
            </p>
            <input
                placeholder='Password'
                type="password"
                className={`${errors.password? 'input-error' : ''} create-acc__input`}
                {...registerPassword}/>
            {errors.password && <span className='error-label'>
              Пароль должен быть от 6 до 40 символов
            </span>}

            <p className="create-acc__label">
                Repeat Password
            </p>
            <input
                placeholder='Password'
                type="password" className="create-acc__input"
                {...registerConfirmPassword}/>
            {confirmPassword && <span className='error-label'>
              Пароли не совпадают
            </span>}

            <div className='create-acc__line'/>
            <div className="create-acc__agree">
                <label>
                    <input type="checkbox" className='create-acc__checkbox'/>
                    I agree to the processing of my personal information
                </label>
            </div>
            <button className="create-acc__btn btn btn__for-modal btn__primary-bg">
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
