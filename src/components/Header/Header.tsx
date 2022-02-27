import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import Account from "./Account";
import Auth from "./Auth";
import {Internationalization} from "../Internationalization/Internationalization";
import {Theme} from "../Theme/Theme";
import {useTranslation} from "react-i18next";
import {useTheme} from "../../theme/useTheme";

type Props = {
    isAuth: boolean
    avatarSrc: string | null
    username: string
}

const Header = (props: Props) => {

    const {isAuth, avatarSrc, username} = props
    const { t } = useTranslation();

    const {theme} = useTheme()

    return (
        <header
            data-theme={theme}
            className='header'>
            <Link to='/articles/page/1'>
                <span
                    data-theme={theme}
                    className='header__title'>
                    {t('blog')}
                </span>
            </Link>
            <Link to='/dd'>
                <span
                    data-theme={theme}
                    className='header__title'>
                    {t('boards')}
                </span>
            </Link>
            <div className='header__spacer'/>
            <Theme />
            <Internationalization />
            <div className='header__auth-block auth'>
                {
                    isAuth ?
                        <Account
                            avatarSrc={avatarSrc}
                            username={username}
                        />
                        :
                        <Auth/>
                }
            </div>
        </header>
    )
}

export default Header;
