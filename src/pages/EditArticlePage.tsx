import React from "react";
import EditArticle from "../components/EditArticle/EditArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";

type StateTypes = {}

type DispatchTypes = {}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const EditArticlePage = ({}: PropsType) => {
    return (
        <EditArticle/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(EditArticlePage)
