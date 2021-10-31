import React, {useEffect} from "react";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {updateArticle} from "../redux/Article/articleActions";
import {updateArticleType} from "../types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";

type StateTypes = {
    isLoading: boolean
}

type DispatchTypes = {
    updateArticle: (slug: string, article: updateArticleType) => void
}

type Props = {
    slug: string,
    history: {
        push: (page: string) => void
    }
}

type PropsType = StateTypes & DispatchTypes & Props

const EditArticlePage = (props: PropsType) => {
    const {isLoading, updateArticle, slug, history} = props

    useEffect(()=> {
        history.push(`/article/${slug}/edit-article`)
    }, [])

    return (
        <ChangeArticle
            slug={slug}
            updateSubmit={updateArticle}
            isLoading={isLoading}
            title={'Edit article'}/>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    isLoading: state.articles.isLoading,
})

const mapDispatchToProps = {
    updateArticle
}


export default connect(
    mapStateToProps, mapDispatchToProps)(withRouter<Props & RouteComponentProps<{}>, any>(EditArticlePage))
