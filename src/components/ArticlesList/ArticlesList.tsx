import React from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import Article from "./ArticleItem";
import Loading from "../Loading/Loading";
import AppPagination from "../Pagination/Pagination";
import Error from "../Error/Error";

type Props = {
    page: number
    articles: Array<ArticleType>
    isLoading: boolean
    setCurrentPage: (number: number) => void
    totalArticles: number
    onLoading: () => void
    isError: boolean
    removeFavorite: (slug: string) => void
    setFavorite: (slug: string) => void
}

const ArticlesList = (props: Props) => {

    const {
        articles,
        isLoading, setCurrentPage,
        page , totalArticles,
        onLoading, isError, setFavorite,
        removeFavorite
    } = props

    return (
        <div className="container">
            {isLoading && <Loading/>}

            {isError && <Error/>}

            {articles?.length ?
                <>
                    {articles.map((article, i) =>
                        <Article
                            setFavorite={setFavorite}
                            removeFavorite={removeFavorite}
                            key={i}
                            article={article}/>
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

export default ArticlesList