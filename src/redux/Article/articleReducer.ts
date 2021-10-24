import {ActionsArticlePageType, ArticleType} from "../../types/types";

const initialState = {
    currentArticle: {} as ArticleType,
    isLoad: false,
    isError: false,
    isNoData: false,
    isShowAlert: false,
    alertMessage: ''
};

type InitialStateType = typeof initialState

export const articleReducer = (state = initialState, action: ActionsArticlePageType): InitialStateType => {
    switch (action.type) {
        case "GET_CURRENT_ARTICLE":
            return {...state, currentArticle: action.article, isError: false}
        case "ON_ERROR":
            return {...state, isError: true}
        case "SET_NO_DATA":
            return {...state, isNoData: true}
        case "FETCHING_ON":
            return {...state, isLoad: true}
        case "FETCHING_OFF":
            return {...state, isLoad: false}
        case "SHOW_ALERT":
            return {...state, isShowAlert: true, alertMessage: action.val}
        case "CLOSE_ALERT":
            return {...state, isShowAlert: false, alertMessage: ''}
        default:
            return state
    }
}