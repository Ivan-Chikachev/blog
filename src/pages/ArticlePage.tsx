import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {ArticleType} from "../types/types";
import {AppStateType} from "../redux/rootReducer";
import Article from "../components/ArticlePage/Article";
import {formatDate} from "../helper/publishedDate";
import {getCurrentArticle, setFavorite, removeFavorite, deleteArticle, resetCurrentArticle} from "../redux/Article/articleActions";


type StateTypes = {
    currentArticle: ArticleType
    isLoading: boolean
    isError: boolean
    isNoData: boolean
    isAuth: boolean
    username: string
}

type DispatchTypes = {
    getCurrentArticle: (slug: string) => void
    setFavorite: (slug: string) => void
    removeFavorite: (slug: string) => void
    deleteArticle: (slug: string) => void
    resetCurrentArticle: () => void
}

type Props = {
    slug: string
}

type PropsType = StateTypes & DispatchTypes & Props

const ArticlePage = (props: PropsType) => {

    const {
        slug, getCurrentArticle, currentArticle,
        isLoading, isError, setFavorite, username,
        removeFavorite, isNoData, isAuth, deleteArticle
    } = props

    useEffect(() => {
        getCurrentArticle(slug)
    }, [])

    const publishedDate = formatDate(currentArticle?.createdAt)

    const isCurrentArticle = !!Object.keys(currentArticle).length

    return (
        <Article
            isNoData={isNoData}
            currentArticle={currentArticle}
            publishedDate={publishedDate}
            isLoading={isLoading}
            isCurrentArticle={isCurrentArticle}
            isError={isError}
            setFavorite={setFavorite}
            removeFavorite={removeFavorite}
            isAuth={isAuth}
            deleteArticle={deleteArticle}
            username={username}
            resetCurrentArticle={resetCurrentArticle}
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    currentArticle: state.articles.currentArticle,
    isLoading: state.articles.isLoading,
    isError: state.articles.isError,
    isNoData: state.articles.isNoData,
    isAuth: state.auth.isAuth,
    username: state.auth.user?.user?.username
})

const mapDispatchToProps = {
    getCurrentArticle,
    deleteArticle,
    setFavorite,
    removeFavorite,
    resetCurrentArticle
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(ArticlePage)
