import React, {useEffect} from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {updateArticle} from "../redux/Article/articleActions";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";
import {updateArticleType} from "../types/types";

type Props = {
    slug: string,
    history: {
        push: (page: string) => void
    }
}

const EditArticlePage = (props: Props) => {
    const {slug, history} = props

    const isLoading = useAppSelector(s => s.app.isLoading)
    const currentArticle = useAppSelector(s => s.articles.currentArticle)

    const dispatch = useAppDispatch()

    useEffect(() => {
        history.push(`/article/${slug}/edit-article`)
    }, [])

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

export default (withRouter<Props & RouteComponentProps<{}>, any>(EditArticlePage))
