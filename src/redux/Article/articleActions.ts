import {ArticleType, ThunkArticlePageType, ThunkArticlesType} from "../../types/types";
import blogAPI from "../../services/api";

export const articlesPageActions = {
    getCurrentArticle: (article: ArticleType) => ({
        type: 'GET_CURRENT_ARTICLE',
        article
    } as const),
    onError: () => ({
        type: 'ON_ERROR'
    } as const)
}

export const getCurrentArticle = (slug: string): ThunkArticlePageType => {
    return async (dispatch) => {
        try {
            const res = await blogAPI.getArticle(slug);
            const data = res.data
            const article = data.article
            const action = articlesPageActions.getCurrentArticle(article)
            dispatch(action)

        } catch (e) {
            dispatch(articlesPageActions.onError())
        }
    }
}

export const onFavorite = (slug: string): ThunkArticlesType => {
    return async (dispatch) => {
       const res = blogAPI.setFavorite(slug)
        console.log(res)
    }
}