import React from "react";
import SignIn from "../components/SignIn/SignIn";
import {AppStateType} from "../redux/rootReducer";
import {resetErrors, signIn} from "../redux/Auth/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type StateTypes = {
    isFetching: boolean
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

    const {signIn, isFetching, isAuth, invalidAuth, resetErrors} = props

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignIn
        isFetching={isFetching}
        signIn={signIn}
        invalidAuth={invalidAuth}
        resetErrors={resetErrors}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    invalidAuth: state.auth.invalidError
})

const mapDispatchToProps = {
    signIn,
    resetErrors
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignInPage)