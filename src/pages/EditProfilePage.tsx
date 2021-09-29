import React from 'react';
import EditProfile from '../components/EditProfile/EditProfile';
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";

type StateTypes = {}

type DispatchTypes = {}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const EditProfilePage = ({}: PropsType) => {
    return (
        <EditProfile/>
    )
}


const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(EditProfilePage)

