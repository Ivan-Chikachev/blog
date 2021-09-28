import React from "react";
import './Article.scss'
import {ArticleType} from "../../types/types";
import Article from "./Article";
import {getArticles, onLoading, setCurrentPage} from "../../redux/Articles/articlesActions";
import {AppStateType} from "../../redux/rootReducer";
import {connect} from "react-redux";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";

type StateTypes = {
    articles: Array<ArticleType>
    totalArticles: number
    isLoading: boolean
}

type DispatchTypes = {
    setCurrentPage: (number: number) => void
    onLoading: () => void
}

type Props = {
    page: number
}

type PropTypes = StateTypes & DispatchTypes & Props

const Articles = ({
                      articles,
                      isLoading, setCurrentPage,
                      page = 1, totalArticles,
                      onLoading
                  }: PropTypes) => {
    return (
        <div className="container">
            {isLoading && <Loading/>}

            {articles.length ?
                <>
                    {articles.map((article, i) =>
                        <Article key={i} article={article}/>
                    )}
                    <AppPagination
                        totalArticles={totalArticles}
                        currentPage={page}
                        setCurrentPage={setCurrentPage}
                        onLoading={onLoading}/>
                </>
                : null
            }
        </div>
    );
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    articles: state.articles.articles,
    totalArticles: state.articles.totalArticles,
    isLoading: state.articles.isLoading
});

const mapDispatchToProps = {
    getArticles,
    setCurrentPage,
    onLoading
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Articles);
