import React, {useState} from "react";
import ChangeArticle from "../components/ChangeArticle/ChangeArticle";
import {AppStateType} from "../redux/rootReducer";
import {connect} from "react-redux";
import {AlertType, createArticleType} from "../types/types";
import {createArticle} from "../redux/Article/articleActions";
import Alert from "../components/Alert/Alert";

type StateTypes = {
    isLoading: boolean
    isShowAlert: boolean
    alert: AlertType
}

type DispatchTypes = {
    createArticle: (article: createArticleType) => void
}

type Props = {}

type PropsType = StateTypes & DispatchTypes & Props

const CreateArticlePage = ({createArticle, isLoading, isShowAlert, alert}: PropsType) => {

    return (
        <>
            {isShowAlert && <Alert
                type={alert.type}
                message={alert.msg}
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
    alert: state.articles.alert
})

const mapDispatchToProps = {
    createArticle
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps)(CreateArticlePage)
