import React from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import ArticleItem from "./ArticleItem";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";
import Error from "../Error/Error";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";

type Props = {
    page: number
}

const ArticlesList = ({page}: Props) => {

    const articles = useSelector<AppStateType, Array<ArticleType>>(s => s.app.articles)
    const totalArticles = useSelector<AppStateType, number>(s => s.app.totalArticles)
    const isLoading = useSelector<AppStateType, boolean>(s => s.app.isLoading)
    const isError = useSelector<AppStateType, boolean>(s => s.app.isError)

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
                    key={i}
                    article={article}
                />
            )}

            {!noData() && <AppPagination
                totalArticles={totalArticles}
                currentPage={page}
            />}
        </div>
    );
}


export default ArticlesList;
