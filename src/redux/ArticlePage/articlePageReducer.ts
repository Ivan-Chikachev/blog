import {ActionsArticlePageType, ArticleType} from "../../types/types";

const initialState = {
    currentArticle: {} as ArticleType,
    isLoading: true
};
type InitialStateType = typeof initialState

export const articlesPageReducer = (state = initialState, action: ActionsArticlePageType): InitialStateType => {
    switch (action.type) {
        case "GET_CURRENT_ARTICLE":
            return {...state, currentArticle: action.article, isLoading: false}
        default:
            return state
    }
}