import {Link} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

const Auth = () => {

    const { t } = useTranslation();

    return (
        <>
            <Link to={'/sign-in'} className='btn btn__large btn__light auth__item'>
                {t('signIn')}
            </Link>
            <Link to={'/sign-up'} className='btn btn__large btn__success auth__item'>
                {t('signUp')}
            </Link>
        </>
    )
}

export default Auth