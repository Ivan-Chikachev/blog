import {ArticleType, ThunkArticlesType} from "../../types/types";
import blogAPI from "../../api/api";

export const articlesActions = {
    getArticles: (articles: Array<ArticleType>) => ({
        type: 'GET_ARTICLES',
        articles
    } as const),
}

export const getArticles = (offset: number): ThunkArticlesType => {
    return async (dispatch) => {
        try {
            console.log('aaa')
            const res = await blogAPI.getListArticles(offset);
            const data = res.data
            const articles = data.articles
            const action = articlesActions.getArticles(articles)
            dispatch(action)

        } catch (e) {

        }
    }
}