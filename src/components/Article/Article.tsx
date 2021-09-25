import React from "react";
import './Article.scss'
import {ArticleType} from "../../types/types";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";

type Props = {
    article: ArticleType
    i: number
    history: {
        push: (page: string) => void
    }
}

const Article = ({
                     article,
                     i,
                     history
                 }: Props) => {
    return (
        <article className='article'>
            <header className="article__header">
                <Link to={`/articles/${article.slug}`}>
                    <h3
                        className="article__title">{article.title}</h3>
                </Link>
                <div className="article__like-block">
                    {article.favoritesCount}
                </div>
            </header>
            <div className="article__tag-list">
                {article.tagList?.map((tag, index) =>
                    <div key={index} className="article__tag-item">
                        {tag}
                    </div>
                )}
            </div>
            <div className="article__text">
                {article.description}
            </div>
        </article>

    );
}

export default withRouter<Props & RouteComponentProps<{}>, any>(Article)
