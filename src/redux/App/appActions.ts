import {ArticleType, ThunkAppType} from "../../types/types";
import blogAPI from "../../services/api";
import {Dispatch} from "redux";

export const appActions = {
    getArticles: (articles: Array<ArticleType>, total: number) => ({
        type: 'GET_ARTICLES',
        articles,
        total
    } as const),
    setCurrentPage: (number: number) => ({
        type: 'SET_CURRENT_PAGE',
        number
    } as const),
    onError: () => ({
        type: 'ON_ERROR'
    } as const),
    fetchingOff: () => ({type: "FETCHING_OFF"} as const),
    fetchingOn: () => ({type: "FETCHING_ON"} as const),
}

export const setCurrentPage = (number: number) => (dispatch: Dispatch) => {
    dispatch(appActions.setCurrentPage(number))
}

export const onLoading = () => (dispatch: Dispatch) => {
    // dispatch(appActions.fetchingOn())
}

export const getArticles = (offset: number): ThunkAppType => {
    return async (dispatch) => {
        dispatch(appActions.fetchingOn())
        try {
            const res = await blogAPI.getListArticles(offset);
            const data = res.data
            const {articles, articlesCount} = data
            const action = appActions.getArticles(articles, articlesCount)
            dispatch(action)

        } catch (e) {
            dispatch(appActions.onError())
        }
        dispatch(appActions.fetchingOff())
    }
}
