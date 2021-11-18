import React from "react";
import SignUp from "../components/SignUp/SignUp";
import {Redirect} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHook";

const SignUpPage = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignUp />
}

export default SignUpPage