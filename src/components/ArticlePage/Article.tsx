import React from "react";
import './Article.scss'
import Loading from "../Loading/Loading";
import {ArticleType} from "../../types/types";
import Error from "../Error/Error";

type Props = {
    publishedDate: string
    currentArticle: ArticleType
    avatarSrc: string
    isLoading: boolean
    isCurrentArticle: boolean
    isError: boolean
}

const Article = ({
                     currentArticle,
                     isLoading,
                     publishedDate,
                     avatarSrc,
                     isCurrentArticle,
                     isError
                 }: Props) => {

    const {
        title, body, favoritesCount,
        author, description, tagList
    } = currentArticle

    return (
        <div className='container'>

            {isLoading && <Loading/>}

            {isError && <Error/>}

            {isCurrentArticle && <article className='article-page'>
              <header className="article-page__header header-article">
                <div className="header-article__left-header">
                  <div className="header-article__title-block">
                    <h3 className="header-article__title">
                        {title}
                    </h3>
                    <div className="header-article__like-block">
                      <button
                        type="button"
                        className='like'
                      >
                          {favoritesCount || 0}
                      </button>
                    </div>
                  </div>
                  <div className="header-article__tag-list">
                      {tagList?.map((tag, index) =>
                          <div key={index} className="header-article__tag-item">
                              {tag}
                          </div>
                      )}
                  </div>
                  <div className="header-article__description">
                      {description}
                  </div>
                </div>
                <div className="header-article__right-header">
                  <div className="header-article__info">
                    <h5 className='header-article__name'>{author.username}</h5>
                    <span className='header-article__date'>{publishedDate}</span>
                  </div>
                  <div>
                    <img className='header-article__avatar' src={avatarSrc} alt=""/>
                  </div>
                </div>
              </header>
              <div className="article-page__text">
                  {body}
              </div>
            </article>}
        </div>
    )
}

export default Article
