import {ActionsArticlesType, ArticleType} from "../../types/types";

const initialState = {
    articles: [] as Array<ArticleType>,
};

type InitialStateType = typeof initialState

export const articlesReducer = (state = initialState, action: ActionsArticlesType): InitialStateType => {
    switch (action.type) {
        case 'GET_ARTICLES':
            return {...state, articles: action.articles }
        default:
            return state
    }
}