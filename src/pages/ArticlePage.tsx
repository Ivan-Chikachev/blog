import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import defaultAvatar from '../img/default-ava.png'
import {ArticleType} from "../types/types";
import { AppStateType } from "../redux/rootReducer";
import Article from "../components/ArticlePage/Article";
import {formatDate} from "../helper/publishedDate";
import {getCurrentArticle} from "../redux/ArticlePage/articlePageActions";


type StateTypes = {
    currentArticle: ArticleType,
    isLoading: boolean
}

type DispatchTypes = {
    getCurrentArticle: (slug: string) => void
}

type Props = {
    slug: string
}

type PropsType = StateTypes & DispatchTypes & Props

const ArticlePage = ({
                         slug,
                         getCurrentArticle, currentArticle,
                         isLoading
                     }: PropsType) => {

    useEffect(() => {
        getCurrentArticle(slug)
    }, [])

    const publishedDate = formatDate(currentArticle?.createdAt)

    const isCurrentArticle = !!Object.keys(currentArticle).length

    const avatarSrc = currentArticle?.author?.image ?
        currentArticle.author.image : defaultAvatar

    return (
        <Article
            currentArticle={currentArticle}
            publishedDate={publishedDate}
            avatarSrc={avatarSrc}
            isLoading={isLoading}
            isCurrentArticle={isCurrentArticle}
        />
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    currentArticle: state.articlePage.currentArticle,
    isLoading: state.articlePage.isLoading
})

const mapDispatchToProps = {
    getCurrentArticle
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(ArticlePage)
