import React from 'react';
import EditProfile from '../components/EditProfile/EditProfile';
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {updateUser} from "../redux/User/userActions";
import {UpdateUserType} from "../types/types";

type StateTypes = {
    isLoading: boolean
    username: string
}

type DispatchTypes = {
    updateUser: (user: UpdateUserType) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const EditProfilePage = ({updateUser, isLoading, username}: PropsType) => {
    return (
        <EditProfile
            updateUser={updateUser}
            isLoading={isLoading}
            username={username}
        />
    )
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isLoading: state.user.isFetching,
    username: state.auth.user?.user?.username
})

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)

