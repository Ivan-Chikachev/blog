import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import Article from "../components/ArticlePage/Article";
import {getCurrentArticle} from "../redux/Article/articleActions";

type Props = {
    slug: string
}

const ArticlePage = ({slug}: Props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentArticle(slug))
    }, [])

    return (
        <Article/>
    )
}

export default ArticlePage
