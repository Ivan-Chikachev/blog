import React from "react";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";

type StateTypes = {}

type DispatchTypes = {}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const EditArticlePage = ({}: PropsType) => {
    return (
        <ChangeArticle title={'Edit article'}/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(EditArticlePage)
