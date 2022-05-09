import React, {useEffect} from "react";
import './ArticlesList.scss'
import ArticleItem from "./ArticleItem";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";
import Error from "../Error/Error";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import {cleanArticleList} from "../../redux/App/appActions";

type Props = {
    page: number
}

const ArticlesList = ({page}: Props) => {

    const articles = useAppSelector(s => s.app.articles)
    const totalArticles = useAppSelector(s => s.app.totalArticles)
    const isLoading = useAppSelector(s => s.app.isLoading)
    const isError = useAppSelector(s => s.app.isError)

    const dispatch = useAppDispatch()

    const noData = () => {
        if (articles.length) {
            return false
        }
        return true
    }

    useEffect(() => {
        return () => {
            dispatch(cleanArticleList())
        }
    }, [])


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
