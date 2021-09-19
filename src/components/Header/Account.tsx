import {Link} from "react-router-dom";
import React from "react";

const Account = () => {
    return (
        <>
            <Link to={'/create-article'} className='btn btn__medium btn__success auth__item'>
                Create article
            </Link>
            <Link to={'/create-article'} className='auth__item'>
                <span className="auth__name">
                    Name
                </span>
                <img
                    className='auth__img'
                    src="https://avatarbox.net/avatars/img25/silver_cat_avatar_picture_23625.jpg"
                    alt=""/>
            </Link>
            <Link to={'/e'} className='btn btn__large btn__light-br auth__item'>
                Log out
            </Link>
        </>
    )
}

export default Account