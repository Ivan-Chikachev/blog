import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";

type StateTypes = {}

type DispatchTypes = {}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const CreateArticlePage = ({}: PropsType) => {
    return (
        <ChangeArticle title={'Create New Article'}/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({})

const mapDispatchToProps = {}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
