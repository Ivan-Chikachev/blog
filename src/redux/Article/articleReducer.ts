import {ActionsArticlePageType, AlertType, ArticleType, typesIsAlert} from "../../types/types";

const initialState = {
    currentArticle: {} as ArticleType,
    isLoad: false,
    isError: false,
    isNoData: false,
    isShowAlert: false,
    alert: {} as AlertType
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
            return {...state, isShowAlert: true, alert: {msg: action.val.msg, type: action.val.type}}
        case "CLOSE_ALERT":
            return {...state, isShowAlert: false, alert: {...state.alert, msg: ''}}
        default:
            return state
    }
}