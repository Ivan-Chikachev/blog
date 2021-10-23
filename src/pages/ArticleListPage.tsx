import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {ArticleType} from "../types/types";
import {getArticles, onLoading, setCurrentPage} from "../redux/App/appActions";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {removeFavorite, setFavorite} from "../redux/Article/articleActions";

type StateTypes = {
    articles: Array<ArticleType>
    totalArticles: number
    isLoading: boolean
    isError: boolean
}

type DispatchTypes = {
    setCurrentPage: (number: number) => void
    onLoading: () => void
    setFavorite: (slug: string) => void
    removeFavorite: (slug: string) => void
}

type Props = {
    page: number
}

type PropTypes = StateTypes & DispatchTypes & Props

const ArticlesListPage = (props: PropTypes) => {
    const {
        articles, isLoading, setCurrentPage,
        page, totalArticles, setFavorite, removeFavorite,
        onLoading, isError
    } = props

    return (
        <ArticlesList
            removeFavorite={removeFavorite}
            setFavorite={setFavorite}
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
    articles: state.app.articles,
    totalArticles: state.app.totalArticles,
    isLoading: state.app.isLoading,
    isError: state.app.isError,
});

const mapDispatchToProps = {
    getArticles,
    setCurrentPage,
    onLoading,
    setFavorite,
    removeFavorite
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ArticlesListPage);
