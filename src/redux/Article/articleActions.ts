import {ArticleType, ThunkArticleType} from "../../types/types";
import blogAPI from "../../services/api";

export const articlesActions = {
    getCurrentArticle: (article: ArticleType) => ({
        type: 'GET_CURRENT_ARTICLE',
        article
    } as const),
    onError: () => ({
        type: 'ON_ERROR'
    } as const)
}

export const getCurrentArticle = (slug: string): ThunkArticleType => {
    return async (dispatch) => {
        try {
            const res = await blogAPI.getArticle(slug);
            const data = res.data
            const article = data.article
            const action = articlesActions.getCurrentArticle(article)
            dispatch(action)

        } catch (e) {
            dispatch(articlesActions.onError())
        }
    }
}

export const setFavorite = (slug: string): ThunkArticleType => {
    return async (dispatch) => {
        try {
            blogAPI.setFavorite(slug)
        } catch (e) {
            console.log(e)
        }
    }
}

export const removeFavorite = (slug: string): ThunkArticleType => {
    return async (dispatch) => {
        try {
            blogAPI.removeFavorite(slug)
        } catch (e) {
            console.log(e)
        }
    }
}