import React from 'react';
import EditProfile from '../components/EditProfile/EditProfile';
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {updateUser} from "../redux/User/userActions";
import {UpdateUserType} from "../types/types";

type StateTypes = {
    isLoading: boolean
}

type DispatchTypes = {
    updateUser: (user: UpdateUserType) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const EditProfilePage = ({updateUser, isLoading}: PropsType) => {
    return (
        <EditProfile
            updateUser={updateUser}
            isLoading={isLoading}
        />
    )
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isLoading: state.user.isFetching
})

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)

