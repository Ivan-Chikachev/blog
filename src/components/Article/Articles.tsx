import React, {useEffect, useState} from "react";
import './Article.scss'
import {ArticleType} from "../../types/types";
import Article from "./Article";
import {getArticles} from "../../redux/Articles/articlesActions";
import {AppStateType} from "../../redux/rootReducer";
import {connect} from "react-redux";
import Loading from "../Loading/Loading";
import {Pagination} from "antd";

type StateTypes = {
    articles: Array<ArticleType>
}

type DispatchTypes = {
    getArticles: (offset: number) => void
}

type PropTypes = StateTypes & DispatchTypes

const Articles = ({articles, getArticles}: PropTypes) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [art, setArt] = useState<Array<ArticleType>>([])

    useEffect(() => {
        getArticles(currentPage)
        setArt(articles)
    }, [currentPage])

    const changePage = (page: number) => {
        setCurrentPage(page)
        setArt([])
    }

    console.log(currentPage)

    return (
        <div className="container">

            {articles.length ?
                <>
                    {art.map((article, i) =>
                        <Article key={i} article={article} i={i}/>
                    )}
                    <Pagination current={currentPage} defaultPageSize={20}
                                onChange={(page) => changePage(page)}
                                total={100} className='pagination'/>
                </>
                : <Loading/>}


        </div>
    );
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    articles: state.articles.articles
});

const mapDispatchToProps = {
    getArticles
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Articles);
