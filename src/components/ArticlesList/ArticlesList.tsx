import React from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import ArticleItem from "./ArticleItem";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";
import Error from "../Error/Error";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";
import {getArticles, setCurrentPage} from "../../redux/App/appActions";
import {removeFavorite, setFavorite} from "../../redux/Article/articleActions";

type StateTypes = {
    articles: Array<ArticleType>
    totalArticles: number
    isLoading: boolean
    isError: boolean
    isAuth: boolean
}

type DispatchTypes = {
    setCurrentPage: (number: number) => void
    setFavorite: (slug: string) => void
    removeFavorite: (slug: string) => void
    getArticles: (offset: number) => void
}

type Props = {
    page: number
}

type PropTypes = StateTypes & DispatchTypes & Props

const ArticlesList = (props: PropTypes) => {

    const {
        articles,
        isLoading, setCurrentPage,
        page, totalArticles,
        isError, setFavorite,
        removeFavorite, isAuth
    } = props

    const noData = () => {
        if (articles.length) {
            return false
        }
        return true
    }

    return (
        <div className="container">

            {isError && <Error/>}

            {isLoading && <Loading/>}

            {noData() &&
            !isLoading &&
            <div>No articles found</div>}

            {articles.map((article, i) =>
                <ArticleItem
                    setFavorite={setFavorite}
                    removeFavorite={removeFavorite}
                    key={i}
                    article={article}
                    isAuth={isAuth}/>
            )}

            {!noData() && <AppPagination
                totalArticles={totalArticles}
                currentPage={page}
                setCurrentPage={setCurrentPage}
            />}
        </div>
    );
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    articles: state.app.articles,
    totalArticles: state.app.totalArticles,
    isLoading: state.app.isLoading,
    isError: state.app.isError,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    getArticles,
    setCurrentPage,
    setFavorite,
    removeFavorite,
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ArticlesList);
