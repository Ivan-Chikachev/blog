import React from "react";
import SignIn from "../components/SignIn/SignIn";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHook";

const SignInPage = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to='/articles/page/1'/>
    }

    return <SignIn/>
}

export default SignInPage