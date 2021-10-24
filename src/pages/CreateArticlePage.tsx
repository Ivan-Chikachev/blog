import React, {useState} from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {createArticleType} from "../types/types";
import {createArticle} from "../redux/Article/articleActions";
import SuccessAlert from "../components/SuccessAlert/SuccessAlert";

type StateTypes = {
    isLoading: boolean
    isShowAlert: boolean
    alertMessage: string
}

type DispatchTypes = {
    createArticle: (article: createArticleType) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const CreateArticlePage = ({createArticle, isLoading, isShowAlert, alertMessage}: PropsType) => {

    return (
        <>
            {isShowAlert && <SuccessAlert
                message={alertMessage}
            />}
            <ChangeArticle
                isLoading={isLoading}
                submit={createArticle}
                title={'Create New Article'}/>
        </>
    )
}

const mapStateToProps = (state: AppStateType): StateTypes => ({
    isLoading: state.articles.isLoad,
    isShowAlert: state.articles.isShowAlert,
    alertMessage: state.articles.alertMessage
})

const mapDispatchToProps = {
    createArticle
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
