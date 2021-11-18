import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import Account from "./Account";
import Auth from "./Auth";

type Props = {
    isAuth: boolean
    avatarSrc: string | null
    username: string
}

const Header = (props: Props) => {

    const {isAuth, avatarSrc, username} = props

    return (
        <header className='header'>
            <Link to='/articles/page/1'>
                <span className={'header__title'}>
                    Blog
                </span>
            </Link>
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
    );
}

export default Header;
