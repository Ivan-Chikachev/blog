import React, {useEffect, useState} from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {formatDate} from "../../helper/publishedDate";
import defaultAvatar from "../../img/default-ava.png";
import Like from "../Like/Like";
import {removeFavorite, setFavorite} from "../../redux/Article/articleActions";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";

type Props = {
    article: ArticleType
}

const ArticleItem = ({article}: Props) => {

    const isAuth = useAppSelector(s => s.auth.isAuth)

    const dispatch = useAppDispatch()

    const {
        slug, title, favoritesCount,
        author, description, tagList, favorited,
    } = article

    const [isLiked, setIsLiked] = useState(favorited)
    const [likeCount, setLikeCount] = useState(favoritesCount)

    useEffect(() => {
        setLikeCount(favoritesCount)
        setIsLiked(favorited)
    }, [favoritesCount, favorited])

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

    const tagsRender = () => {
        return tagList?.map((tag, index) =>
            <div key={index} className="article__tag-item">
                {tag}
            </div>
        )
    }

    const publishedDate = formatDate(article.createdAt)
    const avatarSrc = author?.image || defaultAvatar

    return (
        <article className='article'>
            <header className="article__header">
                <div className="article__header-left">
                    <Link to={`/article/${slug}`}>
                        <h3
                            className="article__title">
                            {title}
                        </h3>
                    </Link>
                    <div className="article__like-block">
                        <Like
                            slug={slug}
                            isLiked={isLiked}
                            likeCount={likeCount}
                            clickLike={clickLike}
                            disabled={!isAuth}
                        />
                    </div>
                </div>
                <div className="article__header-right">
                    <div className="article__info">
                        <h5 className='article__name'>{author.username}</h5>
                        <span className='article__date'>{publishedDate}</span>
                    </div>
                    <div>
                        <img className='article__avatar' src={avatarSrc} alt=""/>
                    </div>
                </div>
            </header>
            <div className="article__tag-list">
                {tagsRender()}
            </div>
            <div className="article__text">
                {description}
            </div>
        </article>

    );
}

export default withRouter<Props & RouteComponentProps<{}>, any>(ArticleItem)
