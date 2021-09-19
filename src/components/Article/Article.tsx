import React, {useEffect, useState} from "react";
import './Article.scss'
import {ArticleType} from "../../types/types";

type Props = {
    article: ArticleType
    i: number
}

const Article = ({article, i}: Props) => {
    return (
        <article className='article'>
            <header className="article__header">
                <h3 className="article__title">{article.title}</h3>
                <div className="article__like-block">
                    {article.favoritesCount}
                </div>
            </header>
            <div className="article__tag-list">
                {article.tagList?.map((tag, iTag) =>
                    <div key={iTag} className="article__tag-item">
                        {tag}
                    </div>
                )}
            </div>
            <div className="article__text">
                {article.body}
            </div>
        </article>
        
    );
}

export default Article;
