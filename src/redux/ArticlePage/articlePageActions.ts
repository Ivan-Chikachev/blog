import {ArticleType, ThunkArticlePageType, ThunkArticlesType} from "../../types/types";
import blogAPI from "../../api/api";

export const articlesPageActions = {
    getCurrentArticle: (article: ArticleType) => ({
        type: 'GET_CURRENT_ARTICLE',
        article
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

        }
    }
}
