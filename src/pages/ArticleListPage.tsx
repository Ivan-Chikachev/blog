import React, {useEffect} from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {getArticles} from "../redux/App/appActions";
import {useDispatch} from "react-redux";

type Props = {
    page: number
}


const ArticlesListPage = ({page}: Props) => {

    const dispatch = useDispatch()

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
