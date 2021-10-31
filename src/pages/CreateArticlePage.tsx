import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import { createArticleType} from "../types/types";
import {createArticle} from "../redux/Article/articleActions";

type StateTypes = {
    isLoading: boolean
}

type DispatchTypes = {
    createArticle: (article: createArticleType) => void
}

type PropsType = StateTypes & DispatchTypes

const CreateArticlePage = ({createArticle, isLoading}: PropsType) => {

    return (
        <ChangeArticle
            isLoading={isLoading}
            createSubmit={createArticle}
            title={'Create New Article'}/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    isLoading: state.articles.isLoading
})

const mapDispatchToProps = {
    createArticle
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
