import React, {useEffect, useState} from "react";
import './Article.scss'
import blogAPI from "../../api/api";
import {ArticleType} from "../../types/types";
import Article from "./Article";

const Articles = () => {

    const [articles, setArticles] = useState<Array<ArticleType>>([])
    useEffect(() => {
        blogAPI.getListArticles(5).then((res) => {
            const data = res.data
            setArticles(data.articles)
        })
    })
    return (
        <div className="container">
            {articles.map((article, i) =>
                <Article key={i} article={article} i={i}/>
            )}
        </div>
    );
}

export default Articles;
