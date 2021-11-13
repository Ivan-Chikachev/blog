import {Link} from "react-router-dom";
import React from "react";
import defaultAvatar from '../../img/default-ava.png'
import {useDispatch} from "react-redux";
import {logout} from "../../redux/Auth/authActions";


type Props = {
    avatarSrc: string | null
    username: string
}

const Account = (props: Props) => {

    const {avatarSrc, username} = props
    const dispatch = useDispatch()

    const avatar = avatarSrc || defaultAvatar

    return (
        <>
            <Link to={'/create-article'} className='btn btn__medium btn__success auth__item'>
                Create article
            </Link>
            <Link to={'/profile'} className='auth__item'>
                <span className="auth__name">
                    {username}
                </span>
                <img
                    className='auth__img'
                    src={avatar}
                    alt=""/>
            </Link>
            <button
                onClick={() => dispatch(logout())}
                className='btn btn__large btn__light-br auth__item'>
                Log out
            </button>
        </>
    )
}

export default Account