import {ActionsArticlePageType, ArticleType} from "../../types/types";

const initialState = {
    currentArticle: {} as ArticleType,
    isLoading: false,
    isError: false,
    isNoData: false,
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
            return {...state, isLoading: true}
        case "FETCHING_OFF":
            return {...state, isLoading: false}
        case "RESET_CURRENT_ARTICLE":
            return {...state, currentArticle: {} as ArticleType}
        default:
            return state
    }
}