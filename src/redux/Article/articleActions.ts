import {AlertType, ArticleType, createArticleType, ThunkArticleType} from "../../types/types";
import blogAPI from "../../services/api";
import {Dispatch} from "redux";

export const articlesActions = {
    getCurrentArticle: (article: ArticleType) => ({
        type: 'GET_CURRENT_ARTICLE',
        article
    } as const),
    onError: () => ({
        type: 'ON_ERROR'
    } as const),
    setNoData: () => ({
        type: 'SET_NO_DATA'
    } as const),
    fetchingOff: () => ({type: "FETCHING_OFF"} as const),
    fetchingOn: () => ({type: "FETCHING_ON"} as const),
    showAlert: (val: AlertType) => ({type: "SHOW_ALERT", val} as const),
    closeAlert: () => ({type: "CLOSE_ALERT"} as const),
}

export const getCurrentArticle = (slug: string): ThunkArticleType => {
    return async (dispatch) => {
        dispatch(articlesActions.fetchingOn())

        try {
            const res = await blogAPI.getArticle(slug);
            const data = res.data
            const article = data.article

            if (!Object.keys(article).length) {
                dispatch(articlesActions.setNoData())
            }

            const action = articlesActions.getCurrentArticle(article)
            dispatch(action)

        } catch (e) {
            dispatch(articlesActions.onError())
        }
        dispatch(articlesActions.fetchingOff())
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

export const createArticle = (article: createArticleType): ThunkArticleType => {
    return async (dispatch) => {
        dispatch(articlesActions.fetchingOn())

        try {
            const res = await blogAPI.createArticle(article)
            if (res.status === 200) {
                dispatch(articlesActions.showAlert({
                    msg: 'Пост успешно создан', type: 'success'
                }))
            }
        } catch (e) {
            dispatch(articlesActions.showAlert({
                msg: 'Такой пост уже есть', type: "error"
            }))
        }
        dispatch(articlesActions.fetchingOff())

        setTimeout(() => {
            dispatch(articlesActions.closeAlert())
        }, 3000)
    }
}
