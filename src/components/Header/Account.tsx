import {Link} from "react-router-dom";
import React from "react";
import defaultAvatar from '../../img/default-ava.png'
import {logout} from "../../redux/Auth/authActions";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hooks/reduxHook";


type Props = {
    avatarSrc: string | null
    username: string
}

const Account = (props: Props) => {

    const {avatarSrc, username} = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation();

    const avatar = avatarSrc || defaultAvatar

    return (
        <>
            <Link to={'/create-article'} className='btn btn__medium btn__success auth__item'>
                {t('createArticle')}
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
                {t('logout')}
            </button>
        </>
    )
}

export default Account