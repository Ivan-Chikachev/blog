import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {ArticleType} from "../types/types";
import {AppStateType} from "../redux/rootReducer";
import Article from "../components/ArticlePage/Article";
import {formatDate} from "../helper/publishedDate";
import {getCurrentArticle, setFavorite, removeFavorite} from "../redux/Article/articleActions";


type StateTypes = {
    currentArticle: ArticleType
    isLoading: boolean
    isError: boolean
}

type DispatchTypes = {
    getCurrentArticle: (slug: string) => void
    setFavorite: (slug: string) => void
    removeFavorite: (slug: string) => void
}

type Props = {
    slug: string
}

type PropsType = StateTypes & DispatchTypes & Props

const ArticlePage = (props: PropsType) => {

    const {
        slug, getCurrentArticle, currentArticle,
        isLoading, isError, setFavorite,
        removeFavorite
    } = props

    useEffect(() => {
        getCurrentArticle(slug)
    }, [])

    const publishedDate = formatDate(currentArticle?.createdAt)

    const isCurrentArticle = !!Object.keys(currentArticle).length

    return (
        <Article
            currentArticle={currentArticle}
            publishedDate={publishedDate}
            isLoading={isLoading}
            isCurrentArticle={isCurrentArticle}
            isError={isError}
            setFavorite={setFavorite}
            removeFavorite={removeFavorite}
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    currentArticle: state.articles.currentArticle,
    isLoading: state.articles.isLoading,
    isError: state.articles.isError,
})

const mapDispatchToProps = {
    getCurrentArticle,
    setFavorite,
    removeFavorite,
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(ArticlePage)
