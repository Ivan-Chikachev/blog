import {ArticleType, ThunkArticlesType} from "../../types/types";
import blogAPI from "../../api/api";

export const articlesActions = {
    getArticles: (articles: Array<ArticleType>, total: number) => ({
        type: 'GET_ARTICLES',
        articles,
        total
    } as const),
    setCurrentPage: (number: number) => ({
        type: 'SET_CURRENT_PAGE',
        number
    } as const),
    getCurrentArticle: (article: ArticleType) => ({
        type: 'GET_CURRENT_ARTICLE',
        article
    } as const),
    onLoading: () => ({
        type: 'ON_LOADING'
    } as const)
}

export const setCurrentPage = (number: number) => {
    return (dispatch: any) => {
        dispatch(articlesActions.setCurrentPage(number))
    }
}

export const onLoading = () => {
    return (dispatch: any) => {
        dispatch(articlesActions.onLoading())
    }
}

export const getArticles = (offset: number): ThunkArticlesType => {
    return async (dispatch) => {
        try {
            const res = await blogAPI.getListArticles(offset);
            const data = res.data
            const articles = data.articles
            const total = data.articlesCount
            const action = articlesActions.getArticles(articles, total)
            dispatch(action)

        } catch (e) {

        }
    }
}

export const getCurrentArticle = (slug: string): ThunkArticlesType => {
    return async (dispatch) => {
        try {
            const res = await blogAPI.getArticle(slug);
            const data = res.data
            const article = data.article
            const action = articlesActions.getCurrentArticle(article)
            dispatch(action)

        } catch (e) {

        }
    }
}
