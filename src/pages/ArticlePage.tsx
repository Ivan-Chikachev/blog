import React, {useEffect} from "react";
import Article from "../components/ArticlePage/Article";
import {getCurrentArticle} from "../redux/Article/articleActions";
import {useAppDispatch} from "../hooks/reduxHook";

type Props = {
    slug: string
}

const ArticlePage = ({slug}: Props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCurrentArticle(slug))
    }, [])

    return (
        <Article/>
    )
}

export default ArticlePage
