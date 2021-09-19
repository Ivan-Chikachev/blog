import {Link} from "react-router-dom";
import React from "react";

const Auth = () => {
    return (
        <>
            <Link to={'/signin'} className='btn btn__large btn__light auth__item'>
                Sign In
            </Link>
            <Link to={'/signup'} className='btn btn__large btn__success auth__item'>
                Sign Up
            </Link>
        </>
    )
}

export default Auth