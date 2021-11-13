import React from "react";
import SignIn from "../components/SignIn/SignIn";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/rootReducer";

const SignInPage = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignIn/>
}

export default SignInPage