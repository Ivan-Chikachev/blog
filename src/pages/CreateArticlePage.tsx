import React from "react";
import CreateArticle from "../components/CreateArticle/CreateArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";

type StateTypes = {}

type DispatchTypes = {}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const CreateArticlePage = ({}: PropsType) => {
    return (
        <CreateArticle/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
