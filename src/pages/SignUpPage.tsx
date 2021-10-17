import React from "react";
import SignUp from "../components/SignUp/SignUp";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {resetErrors, signUp} from "../redux/Auth/authActions";
import {Redirect} from "react-router-dom";

type StateTypes = {
    isAuth: boolean,
    isFetching: boolean
    usernameError: string
    emailError: string
    passwordError: string
}

type DispatchTypes = {
    signUp: (username: string, email: string, password: string) => void
    resetErrors: () => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const SignUpPage = (props: PropsType) => {

    const {
        signUp, isAuth,
        usernameError,
        passwordError,
        isFetching,
        emailError,
        resetErrors
    } = props

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignUp
        resetErrors={resetErrors}
        signUp={signUp}
        usernameError={usernameError}
        emailError={emailError}
        passwordError={passwordError}
        isFetching={isFetching}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    usernameError: state.auth.errors.username[0],
    emailError: state.auth.errors.email[0],
    passwordError: state.auth.errors.password[0]
})

const mapDispatchToProps = {
    signUp,
    resetErrors
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignUpPage)