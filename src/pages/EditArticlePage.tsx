import React, {useEffect} from "react";
import {connect} from "react-redux";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {updateArticle} from "../redux/Article/articleActions";
import {updateArticleType} from "../types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHook";

type DispatchTypes = {
    updateArticle: (slug: string, article: updateArticleType) => void
}

type Props = {
    slug: string,
    history: {
        push: (page: string) => void
    }
}

type PropsType = DispatchTypes & Props

const EditArticlePage = (props: PropsType) => {
    const {updateArticle, slug, history} = props

    const isLoading = useAppSelector(s => s.app.isLoading)
    const article = useAppSelector(s => s.articles.currentArticle)

    useEffect(()=> {
        history.push(`/article/${slug}/edit-article`)
    }, [])

    return (
        <ChangeArticle
            article={article}
            slug={slug}
            updateSubmit={updateArticle}
            isLoading={isLoading}
            title={'Edit article'}/>
    )
}

const mapDispatchToProps = {
    updateArticle
}


export default connect(
    ()=>({}), mapDispatchToProps)(withRouter<Props & RouteComponentProps<{}>, any>(EditArticlePage))
