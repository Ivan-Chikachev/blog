import {ActionsArticlePageType, ArticleType} from "../../types/types";

const initialState = {
    currentArticle: {} as ArticleType,
    isLoading: true,
    isError: false,
};

type InitialStateType = typeof initialState

export const articleReducer = (state = initialState, action: ActionsArticlePageType): InitialStateType => {
    switch (action.type) {
        case "GET_CURRENT_ARTICLE":
            return {...state, currentArticle: action.article, isLoading: false, isError: false}
        case "ON_ERROR":
            return {...state, isError: true, isLoading: false}
        default:
            return state
    }
}