import {ActionsArticlesType, ArticleType} from "../../types/types";

const initialState = {
    articles: [] as Array<ArticleType>,
    currentPage: 1,
    isLoading: false,
    totalArticles: 1,
    isError: false
};
type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionsArticlesType): InitialStateType => {
    switch (action.type) {
        case 'GET_ARTICLES':
            return {...state, articles: action.articles, totalArticles: action.total, isLoading: false, isError: false};
        case "SET_CURRENT_PAGE":
            return {...state, articles: [], currentPage: action.number}
        case "ON_LOADING":
            return {...state, isLoading: true}
        case "ON_ERROR":
            return {...state, isError: true, isLoading: false}
        default:
            return state
    }
}
