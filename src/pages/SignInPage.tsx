import React from "react";
import SignIn from "../components/SignIn/SignIn";
import {AppStateType} from "../redux/rootReducer";
import {signIn} from "../redux/Auth/authActions";
import {connect} from "react-redux";

type StateTypes = {}

type DispatchTypes = {
    signIn: (email: string, password: string) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const SignInPage = ({signIn}: PropsType) => {
    return <SignIn
        signIn={signIn}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {
    signIn
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignInPage)