import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {createArticle} from "../redux/Article/articleActions";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";
import {createArticleType} from "../types/types";
import {useTranslation} from "react-i18next";

const CreateArticlePage = () => {

    const isLoading = useAppSelector(s => s.app.isLoading)

    const dispatch = useAppDispatch()
    const { t } = useTranslation();

    const submit = (article: createArticleType) => dispatch(createArticle(article))

    return (
        <ChangeArticle
            isLoading={isLoading}
            createSubmit={submit}
            title={t('createNewArticle')}/>
    )
}

export default CreateArticlePage
