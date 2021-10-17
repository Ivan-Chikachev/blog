import React from "react";
import SignIn from "../components/SignIn/SignIn";
import {AppStateType} from "../redux/rootReducer";
import {resetErrors, signIn} from "../redux/Auth/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type StateTypes = {
    emailError: string
    passwordError: string
    isFetching: boolean
    usernameError: string
    isAuth: boolean
    invalidAuth: string
}

type DispatchTypes = {
    signIn: (email: string, password: string) => void
    resetErrors: () => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const SignInPage = (props: PropsType) => {

    const {signIn, emailError, isFetching, passwordError, isAuth, invalidAuth, resetErrors} = props

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignIn
        emailError={emailError}
        isFetching={isFetching}
        passwordError={passwordError}
        signIn={signIn}
        invalidAuth={invalidAuth}
        resetErrors={resetErrors}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isFetching: state.auth.isFetching,
    usernameError: state.auth.errors.username[0],
    emailError: state.auth.errors.email[0],
    passwordError: state.auth.errors.password[0],
    isAuth: state.auth.isAuth,
    invalidAuth: state.auth.invalidError
})

const mapDispatchToProps = {
    signIn,
    resetErrors
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignInPage)