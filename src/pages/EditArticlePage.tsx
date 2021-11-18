import React, {useEffect} from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {updateArticle} from "../redux/Article/articleActions";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHook";

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

    const submit = dispatch(() => updateArticle)

    return (
        <ChangeArticle
            slug={slug}
            updateSubmit={submit}
            isLoading={isLoading}
            currentArticle={currentArticle}
            title={'Edit article'}/>
    )
}

export default (withRouter<Props & RouteComponentProps<{}>, any>(EditArticlePage))
