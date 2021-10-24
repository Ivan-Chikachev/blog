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
    isNoData: boolean
    isAuth: boolean
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
        removeFavorite, isNoData, isAuth
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
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    currentArticle: state.articles.currentArticle,
    isLoading: state.articles.isLoad,
    isError: state.articles.isError,
    isNoData: state.articles.isNoData,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    getCurrentArticle,
    setFavorite,
    removeFavorite,
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(ArticlePage)
