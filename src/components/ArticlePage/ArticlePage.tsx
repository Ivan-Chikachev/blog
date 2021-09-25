import React, {useEffect, useState} from "react";
import './ArticlePage.scss'
import {ArticleType} from "../../types/types";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";
import {getCurrentArticle} from "../../redux/Articles/articlesActions";
import Loading from "../Loading/Loading";

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

    const isCurrentArticle = !!Object.keys(currentArticle).length
    return (
        <div className='container'>

            {isLoading && <Loading/>}

            {isCurrentArticle && <article className='article-page'>
              <header className="article-page__header header-article">
                <div className="header-article__left-header">
                  <div className="header-article__title-block">
                    <h3 className="header-article__title">
                        {currentArticle.title}
                    </h3>
                    <div className="header-article__like-block">
                        {currentArticle.favoritesCount}
                    </div>
                  </div>
                  <div className="header-article__tag-list">
                      {currentArticle.tagList?.map((tag, index) =>
                          <div key={index} className="header-article__tag-item">
                              {tag}
                          </div>
                      )}
                  </div>
                  <div className="header-article__description">
                      {currentArticle.description}
                  </div>
                </div>
                <div className="header-article__right-header">
                  a
                </div>
              </header>
              <div className="article-page__text">
                  {currentArticle.body}
              </div>
            </article>}
        </div>
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
