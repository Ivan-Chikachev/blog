import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import defaultAvatar from '../img/default-ava.png'
import {ArticleType} from "../types/types";
import {AppStateType} from "../redux/rootReducer";
import Article from "../components/ArticlePage/Article";
import {formatDate} from "../helper/publishedDate";
import {getCurrentArticle, onFavorite} from "../redux/Article/articleActions";


type StateTypes = {
    currentArticle: ArticleType
    isLoading: boolean
    isError: boolean
}

type DispatchTypes = {
    getCurrentArticle: (slug: string) => void
    onFavorite: (slug: string) => void
}

type Props = {
    slug: string
}

type PropsType = StateTypes & DispatchTypes & Props

const ArticlePage = (props: PropsType) => {

    const {
        slug, getCurrentArticle, currentArticle,
        isLoading, isError, onFavorite
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
            onFavorite={onFavorite}
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    currentArticle: state.articlePage.currentArticle,
    isLoading: state.articlePage.isLoading,
    isError: state.articlePage.isError
})

const mapDispatchToProps = {
    getCurrentArticle,
    onFavorite
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(ArticlePage)
