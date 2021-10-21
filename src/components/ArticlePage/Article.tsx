import React from "react";
import './Article.scss'
import Loading from "../Loading/Loading";
import {ArticleType} from "../../types/types";
import Error from "../Error/Error";
import defaultAvatar from "../../img/default-ava.png";
import classNames from "classnames";

type Props = {
    publishedDate: string
    currentArticle: ArticleType
    isLoading: boolean
    isCurrentArticle: boolean
    isError: boolean
    onFavorite: (slug: string) => void
}

const Article = (props: Props) => {
    const {
        currentArticle,
        isLoading, publishedDate,
        isCurrentArticle, isError, onFavorite
    } = props

    const {
        title, body, favoritesCount,
        author, description, tagList,
        favorited, slug
    } = currentArticle

    const avatarSrc = currentArticle?.author?.image || defaultAvatar

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
                                    className={classNames({
                                        like: true,
                                        active: favorited
                                    })}
                                    onClick={() => onFavorite(slug)}
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
