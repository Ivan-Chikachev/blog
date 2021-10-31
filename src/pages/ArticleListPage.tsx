import React, {useEffect} from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {getArticles} from "../redux/App/appActions";
import {connect} from "react-redux";

type DispatchTypes = {
    getArticles: (offset: number) => void
}

type Props = {
    page: number
}

type PropTypes = DispatchTypes & Props

const ArticlesListPage = (props: PropTypes) => {

    const {page, getArticles} = props

    useEffect(() => {
        getArticles(page)
    }, [page])

    return (
        <ArticlesList
            page={page}
        />
    )
}

const mapDispatchToProps = {
    getArticles
}

export default connect(()=> ({}), mapDispatchToProps)(ArticlesListPage);
