import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {createArticle} from "../redux/Article/articleActions";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";

const CreateArticlePage = () => {

    const isLoading = useAppSelector(s => s.app.isLoading)

    const dispatch = useAppDispatch()

    const submit = dispatch(() => createArticle)

    return (
        <ChangeArticle
            isLoading={isLoading}
            createSubmit={submit}
            title={'Create New Article'}/>
    )
}

export default CreateArticlePage
