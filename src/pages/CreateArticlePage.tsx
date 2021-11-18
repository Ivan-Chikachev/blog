import React from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {connect} from "react-redux";
import {createArticleType} from "../types/types";
import {createArticle} from "../redux/Article/articleActions";
import {useAppSelector} from "../hooks/reduxHook";

type DispatchTypes = {
    createArticle: (article: createArticleType) => void
}

type PropsType = DispatchTypes

const CreateArticlePage = ({createArticle}: PropsType) => {

    const isLoading = useAppSelector(s => s.app.isLoading)

    return (
        <ChangeArticle
            isLoading={isLoading}
            createSubmit={createArticle}
            title={'Create New Article'}/>
    )
}

const mapDispatchToProps = {
    createArticle
}

export default connect(()=> ({}), mapDispatchToProps)(CreateArticlePage)
