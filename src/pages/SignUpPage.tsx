import React from "react";
import SignUp from "../components/SignUp/SignUp";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {signUp} from "../redux/Auth/authActions";

type StateTypes = {}

type DispatchTypes = {
    signUp: (username: string, email: string, password: string) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const SignUpPage = ({signUp}: PropsType) => {
    return <SignUp
        signUp={signUp}
    />
}


const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {
    signUp
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(SignUpPage)