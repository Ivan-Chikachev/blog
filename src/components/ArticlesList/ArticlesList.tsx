import React from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import ArticleItem from "./ArticleItem";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";
import Error from "../Error/Error";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";
import {getArticles, onLoading, setCurrentPage} from "../../redux/App/appActions";
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
    onLoading: () => void
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
        onLoading, isError, setFavorite,
        removeFavorite, isAuth
    } = props

    return (
        <div className="container">
            {isLoading && <Loading/>}

            {isError && <Error/>}

            {articles?.length ?
                <>
                    {articles.map((article, i) =>
                        <ArticleItem
                            setFavorite={setFavorite}
                            removeFavorite={removeFavorite}
                            key={i}
                            article={article}
                            isAuth={isAuth}/>
                    )}
                    <AppPagination
                        totalArticles={totalArticles}
                        currentPage={page}
                        setCurrentPage={setCurrentPage}
                        onLoading={onLoading}/>
                </>
                :
                <div>
                    Нет постов
                </div>
            }
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
    onLoading,
    setFavorite,
    removeFavorite,
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ArticlesList);
