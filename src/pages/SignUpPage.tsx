import React from "react";
import SignUp from "../components/SignUp/SignUp";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {resetErrors, signUp} from "../redux/Auth/authActions";
import {Redirect} from "react-router-dom";

type StateTypes = {
    isAuth: boolean,
    isFetching: boolean
    invalidAuth: string
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
        isFetching,
        resetErrors,
        invalidAuth
    } = props

    if (isAuth) {
        return <Redirect to='/articles/page/1'/>
    }

    return <SignUp
        invalidAuth={invalidAuth}
        resetErrors={resetErrors}
        signUp={signUp}
        isFetching={isFetching}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    invalidAuth: state.auth.invalidError,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})

const mapDispatchToProps = {
    signUp,
    resetErrors
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignUpPage)