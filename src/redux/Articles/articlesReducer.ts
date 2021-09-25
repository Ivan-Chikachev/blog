import {ActionsArticlesType, ArticleType} from "../../types/types";

const initialState = {
    articles: [] as Array<ArticleType>,
    currentPage: 1,
    isLoading: true,
    totalArticles: 1,
    currentArticle: {} as ArticleType
};
type InitialStateType = typeof initialState

export const articlesReducer = (state = initialState, action: ActionsArticlesType): InitialStateType => {
    switch (action.type) {
        case 'GET_ARTICLES':
            return {...state, articles: action.articles, totalArticles: action.total, isLoading: false};
        case "SET_CURRENT_PAGE":
            return {...state, articles: [], currentPage: action.number}
        case "GET_CURRENT_ARTICLE":
            return {...state, currentArticle: action.article, isLoading: false}
        case "ON_LOADING":
            return {...state, isLoading: true}
        default:
            return state
    }
}