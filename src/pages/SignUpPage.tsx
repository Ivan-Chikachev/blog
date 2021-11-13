import React from "react";
import SignUp from "../components/SignUp/SignUp";
import {AppStateType} from "../redux/rootReducer";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const SignUpPage = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignUp />
}

export default SignUpPage