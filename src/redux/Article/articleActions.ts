import {ArticleType, createArticleType, ThunkAppType, ThunkArticleType, updateArticleType} from "../../types/types";
import blogAPI from "../../services/api";
import {Dispatch} from "redux";
import {appActions} from "../App/appActions";

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

export const createArticle = (article: createArticleType): ThunkAppType => {
    return async (dispatch) => {
        dispatch(articlesActions.fetchingOn())

        try {
            const res = await blogAPI.createArticle(article)
            if (res.status === 200) {
                dispatch(appActions.showAlert({
                    msg: 'Пост успешно создан', type: 'success'
                }))
            }
        } catch (e) {
            dispatch(appActions.showAlert({
                msg: 'Такой пост уже есть', type: "error"
            }))
        }
        dispatch(articlesActions.fetchingOff())

        setTimeout(() => {
            dispatch(appActions.closeAlert())
        }, 3000)
    }
}

export const updateArticle = (slug: string, article: updateArticleType): ThunkAppType => {
    return async (dispatch) => {
        dispatch(articlesActions.fetchingOn())

        try {
            const res = await blogAPI.updateArticle(slug, article)
            if (res.status === 200) {
                dispatch(appActions.showAlert({
                    msg: 'Пост успешно обновлен', type: 'success'
                }))
            }
        } catch (e) {
            dispatch(appActions.showAlert({
                msg: 'Ошибка', type: "error"
            }))
        }
        dispatch(articlesActions.fetchingOff())

        setTimeout(() => {
            dispatch(appActions.closeAlert())
        }, 3000)
    }
}

export const deleteArticle = (slug: string): ThunkAppType => {
    return async (dispatch) => {
        try {
            const res = await blogAPI.deleteArticle(slug)
            if (res.status === 204) {
                dispatch(appActions.showAlert({
                    msg: 'Пост удален', type: 'success'
                }))
            }
        } catch (e) {
            dispatch(appActions.showAlert({
                msg: 'Ошибка', type: "error"
            }))
        }

        setTimeout(() => {
            dispatch(appActions.closeAlert())
        }, 3000)
    }
}
