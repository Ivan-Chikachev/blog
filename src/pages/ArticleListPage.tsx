import React, {useEffect} from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {getArticles} from "../redux/App/appActions";
import {useAppDispatch} from "../hooks/reduxHook";
import {useParams} from "react-router-dom";

const ArticlesListPage = () => {

    const dispatch = useAppDispatch()

    const params = useParams()
    const page = Number(params.page) || 1

    useEffect(() => {
        dispatch(getArticles(page))
    }, [page])

    return (
        <ArticlesList
            page={page}
        />
    )
}

export default ArticlesListPage
