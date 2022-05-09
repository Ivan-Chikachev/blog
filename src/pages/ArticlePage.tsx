import React, {useEffect} from "react";
import Article from "../components/ArticlePage/Article";
import {getCurrentArticle} from "../redux/Article/articleActions";
import {useAppDispatch} from "../hooks/reduxHook";
import {useParams} from "react-router-dom";

const ArticlePage = () => {

    const dispatch = useAppDispatch()

    const params = useParams()
    const slug = params.slug || ''

    useEffect(() => {
        dispatch(getCurrentArticle(slug))
    }, [])

    return (
        <Article/>
    )
}

export default ArticlePage
