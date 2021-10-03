import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {ArticleType} from "../types/types";
import {getArticles, onLoading, setCurrentPage} from "../redux/Articles/articlesActions";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";

type StateTypes = {
    articles: Array<ArticleType>
    totalArticles: number
    isLoading: boolean
    isError: boolean
}

type DispatchTypes = {
    setCurrentPage: (number: number) => void
    onLoading: () => void
}

type Props = {
    page: number
}

type PropTypes = StateTypes & DispatchTypes & Props

const ArticlesListPage = ({
                              articles,
                              isLoading, setCurrentPage,
                              page, totalArticles,
                              onLoading, isError
                          }: PropTypes) => {
    return (
        <ArticlesList
            articles={articles}
            isLoading={isLoading}
            setCurrentPage={setCurrentPage}
            page={page}
            totalArticles={totalArticles}
            onLoading={onLoading}
            isError={isError}
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    articles: state.articles.articles,
    totalArticles: state.articles.totalArticles,
    isLoading: state.articles.isLoading,
    isError: state.articles.isError
});

const mapDispatchToProps = {
    getArticles,
    setCurrentPage,
    onLoading
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ArticlesListPage);
