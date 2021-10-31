import {ActionsArticlesType, AlertType, ArticleType} from "../../types/types";

const initialState = {
    articles: [] as Array<ArticleType>,
    currentPage: 1,
    isLoading: false,
    totalArticles: 1,
    isError: false,
    alert: {} as AlertType,
    isShowAlert: false
};
type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionsArticlesType): InitialStateType => {
    switch (action.type) {
        case 'GET_ARTICLES':
            return {...state, articles: action.articles, totalArticles: action.total, isError: false};
        case "SET_CURRENT_PAGE":
            return {...state, articles: [], currentPage: action.number}
        case "FETCHING_ON":
            return {...state, isLoading: true}
        case "FETCHING_OFF":
            return {...state, isLoading: false}
        case "ON_ERROR":
            return {...state, isError: true}
        case "SHOW_ALERT":
            return {...state, isShowAlert: true, alert: {msg: action.val.msg, type: action.val.type}}
        case "CLOSE_ALERT":
            return {...state, isShowAlert: false, alert: {...state.alert, msg: ''}}
        default:
            return state
    }
}
