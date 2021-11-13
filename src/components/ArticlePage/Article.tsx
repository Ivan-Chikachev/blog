import React, {useEffect, useState} from "react";
import './Article.scss'
import Loading from "../Loading/Loading";
import {ArticleType} from "../../types/types";
import Error from "../Error/Error";
import defaultAvatar from "../../img/default-ava.png";
import Like from "../Like/Like";
import {Link, Redirect} from "react-router-dom";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/rootReducer";
import {formatDate} from "../../helper/publishedDate";
import {setFavorite, removeFavorite, deleteArticle} from "../../redux/Article/articleActions";

const Article = () => {

    const currentArticle = useSelector<AppStateType, ArticleType>(s => s.articles.currentArticle)
    const isLoading = useSelector<AppStateType, boolean>(s => s.articles.isLoading)
    const isError = useSelector<AppStateType, boolean>(s => s.articles.isError)
    const isNoData = useSelector<AppStateType, boolean>(s => s.articles.isNoData)
    const isAuth = useSelector<AppStateType, boolean>(s => s.auth.isAuth)
    const username = useSelector<AppStateType, string>(s => s.auth.user?.user?.username)

    const dispatch = useDispatch()

    const {
        title, body, favoritesCount,
        author, description, tagList,
        favorited, slug
    } = currentArticle

    const [isLiked, setIsLiked] = useState(favorited)
    const [likeCount, setLikeCount] = useState(favoritesCount)
    const [isRedirect, setIsRedirect] = useState(false)

    useEffect(() => {
        setLikeCount(favoritesCount)
        setIsLiked(favorited)
    }, [favoritesCount, favorited])

    if (isRedirect) {
        return <Redirect to="/articles/page/1"/>
    }

    const clickLike = (slug: string) => {
        if (isLiked) {
            setIsLiked(false)
            dispatch(removeFavorite(slug))
            setLikeCount(likeCount - 1)
        } else {
            setIsLiked(true)
            dispatch(setFavorite(slug))
            setLikeCount(likeCount + 1)
        }
    }

    const clickDeleteArticle = (slug: string) => {
        dispatch(deleteArticle(slug))
        setIsRedirect(true)
    }

    const avatarSrc = currentArticle?.author?.image || defaultAvatar
    const isVisibleActions = isAuth && author?.username === username
    const publishedDate = formatDate(currentArticle?.createdAt)
    const isCurrentArticle = !!Object.keys(currentArticle).length

    const tagsRender = () => {
        return tagList?.map(tag =>
            <div
                key={tag}
                className="header-article__tag-item">
                {tag}
            </div>
        )
    }

    return (
        <div className='container'>

            {isLoading && <Loading/>}

            {isError && <Error/>}

            {isNoData &&
            !isCurrentArticle &&
            !isLoading &&
            <div>Article not found</div>}

            {isCurrentArticle && <article className='article-page'>
                <header className="article-page__header header-article">
                    <div className="header-article__left-header">
                        <div className="header-article__title-block">
                            <h3 className="header-article__title">
                                {title}
                            </h3>
                            <div className="header-article__like-block">
                                <Like
                                    clickLike={clickLike}
                                    isLiked={isLiked}
                                    slug={slug}
                                    likeCount={likeCount}
                                    disabled={!isAuth}
                                />
                            </div>
                        </div>
                        <div className="header-article__tag-list">
                            {tagsRender()}
                        </div>
                        <div className="header-article__description">
                            {description}
                        </div>
                    </div>
                    <div className="header-article__right-header">
                        <div className="header-article__info">
                            <div>
                                <h5 className='header-article__name'>{author.username}</h5>
                                <span className='header-article__date'>{publishedDate}</span>
                            </div>
                            <div>
                                <img className='header-article__avatar' src={avatarSrc} alt=""/>
                            </div>
                        </div>
                        {isVisibleActions &&
                        <div>
                            <ConfirmDelete
                                slug={slug}
                                clickDeleteArticle={clickDeleteArticle}
                            />
                            <Link
                                className='btn btn__success btn__medium'
                                to={`/article/${slug}/edit-article`}>
                                Edit
                            </Link>
                        </div>
                        }
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
