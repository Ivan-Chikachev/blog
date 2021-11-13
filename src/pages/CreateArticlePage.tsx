import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect, useSelector} from "react-redux";
import {createArticleType} from "../types/types";
import {createArticle} from "../redux/Article/articleActions";

type DispatchTypes = {
    createArticle: (article: createArticleType) => void
}

type PropsType = DispatchTypes

const CreateArticlePage = ({createArticle}: PropsType) => {

    const isLoading = useSelector<AppStateType, boolean>(s => s.articles.isLoading)

    return (
        <ChangeArticle
            isLoading={isLoading}
            createSubmit={createArticle}
            title={'Create New Article'}/>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isLoading: state.articles.isLoading
})

const mapDispatchToProps = {
    createArticle
}

export default connect<any, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
