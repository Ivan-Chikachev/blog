import {createArticleType, enumAlertType, updateArticleType} from "../../types/types";
import blogAPI from "../../services/api";
import {articlesActions} from "./articleReducer";
import {AppDispatch} from "../rootReducer";
import {appActions} from "../App/appReducer";

export const getCurrentArticle = (slug: string) => {
    return async (dispatch: AppDispatch) => {

        dispatch(appActions.FETCHING_ON())
        try {
            const res = await blogAPI.getArticle(slug);
            const data = res.data
            const article = data.article

            if (!Object.keys(article).length) {
                dispatch(articlesActions.SET_NO_DATA())
            }

            const action = articlesActions.GET_CURRENT_ARTICLE(article)
            dispatch(action)

        } catch (e) {
            dispatch(articlesActions.ON_ERROR())
        }
        finally {
            dispatch(appActions.FETCHING_OFF())
        }
    }
}

export const cleanCurrentArticle = () => (dispatch: AppDispatch) => {
    dispatch(articlesActions.CLEAN_CURRENT_ARTICLE())
}

export const setFavorite = (slug: string) => {
    return async () => {
        try {
            blogAPI.setFavorite(slug)
        } catch (e) {
            console.log(e)
        }
    }
}

export const removeFavorite = (slug: string) => {
    return async () => {
        try {
            blogAPI.removeFavorite(slug)
        } catch (e) {
            console.log(e)
        }
    }
}

export const createArticle = (article: createArticleType) => {
    return async (dispatch: AppDispatch) => {
        dispatch(appActions.FETCHING_ON())

        try {
            const res = await blogAPI.createArticle(article)
            if (res.status === 200) {
                dispatch(appActions.SHOW_ALERT({
                    msg: 'Article created successfully', type: enumAlertType.success
                }))
            }
        } catch (e) {
            dispatch(appActions.SHOW_ALERT({
                msg: 'Such an article already exists', type: enumAlertType.error
            }))
        } finally {
            dispatch(appActions.FETCHING_OFF())
        }

        setTimeout(() => {
            dispatch(appActions.CLOSE_ALERT())
        }, 3000)
    }
}

export const updateArticle = (slug: string, article: updateArticleType) => {
    return async (dispatch: AppDispatch) => {
        dispatch(appActions.FETCHING_ON())

        try {
            const res = await blogAPI.updateArticle(slug, article)
            if (res.status === 200) {
                dispatch(appActions.SHOW_ALERT({
                    msg: 'Article updated successfully', type: enumAlertType.success
                }))
            }
        } catch (e) {
            dispatch(appActions.SHOW_ALERT({
                msg: 'Error', type: enumAlertType.error
            }))
        }
        finally {
            dispatch(appActions.FETCHING_OFF())
        }

        setTimeout(() => {
            dispatch(appActions.CLOSE_ALERT())
        }, 3000)
    }
}

export const deleteArticle = (slug: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await blogAPI.deleteArticle(slug)
            if (res.status === 204) {
                dispatch(appActions.SHOW_ALERT({
                    msg: 'Article deleted', type: enumAlertType.success
                }))
            }
        } catch (e) {
            dispatch(appActions.SHOW_ALERT({
                msg: 'Error', type: enumAlertType.error
            }))
        }

        setTimeout(() => {
            dispatch(appActions.CLOSE_ALERT())
        }, 3000)
    }
}
