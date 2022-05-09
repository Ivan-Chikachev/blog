import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {updateArticle} from "../redux/Article/articleActions";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";
import {updateArticleType} from "../types/types";

const EditArticlePage = () => {
    const isLoading = useAppSelector(s => s.app.isLoading)
    const currentArticle = useAppSelector(s => s.articles.currentArticle)

    const dispatch = useAppDispatch()

    const {slug} = useParams()

    const submit = (slug: string, article: updateArticleType) => {
        return dispatch(updateArticle(slug, article))
    }

    return (
        <ChangeArticle
            slug={slug}
            updateSubmit={submit}
            isLoading={isLoading}
            article={currentArticle}
            title={'Edit article'}/>
    )
}

export default EditArticlePage
