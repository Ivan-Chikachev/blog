import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
           <span className={'header__title'}>
               Blog
           </span>
            <div className='header__auth-block auth'>
                <button className='btn btn__large btn__light auth__item'>Sign in</button>
                <button className='btn btn__large btn__success auth__item'>Sign up</button>
            </div>
        </header>
    );
}

export default Header;
