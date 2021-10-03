import React from "react";
import './ArticlesList.scss'
import {ArticleType} from "../../types/types";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {formatDate} from "../../helper/publishedDate";

type Props = {
    article: ArticleType
}

const ArticleItem = ({article}: Props) => {

    const publishedDate = formatDate(article.createdAt)
    const {
        slug, title, favoritesCount,
        author, description, tagList
    } = article


    return (
        <article className='article'>
            <header className="article__header">
                <div className="article__header-left">
                    <Link to={`/articles/${slug}`}>
                        <h3
                            className="article__title">{title}</h3>
                    </Link>
                    <div className="article__like-block">
                        <button
                            type="button"
                            className='like active'
                        >
                            {favoritesCount || 0}
                        </button>
                    </div>
                </div>
                <div className="article__header-right">
                    <div className="article__info">
                        <h5 className='article__name'>{author.username}</h5>
                        <span className='article__date'>{publishedDate}</span>
                    </div>
                    <div>
                        <img className='article__avatar' src={author.image} alt=""/>
                    </div>
                </div>
            </header>
            <div className="article__tag-list">
                {tagList?.map((tag, index) =>
                    <div key={index} className="article__tag-item">
                        {tag}
                    </div>
                )}
            </div>
            <div className="article__text">
                {description}
            </div>
        </article>

    );
}

export default withRouter<Props & RouteComponentProps<{}>, any>(ArticleItem)
