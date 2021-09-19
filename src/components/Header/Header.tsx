import React, {useState} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import Account from "./Account";
import Auth from "./Auth";

const Header = () => {
    const [auth, s] = useState(false)
    return (
        <header className='header'>
            <Link to='/'>
                <span className={'header__title'}>
                    Blog
                </span>
            </Link>
            <div className='header__auth-block auth'>
                {
                    auth ?
                        <Account/>
                        :
                        <Auth/>
                }
            </div>
        </header>
    );
}

export default Header;
