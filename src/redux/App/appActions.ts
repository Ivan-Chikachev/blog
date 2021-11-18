import blogAPI from "../../services/api";
import {Dispatch} from "redux";
import {appActions} from "./appReducer";
import {AppDispatch} from "../rootReducer";

export const setCurrentPage = (number: number) => (dispatch: Dispatch) => {
    dispatch(appActions.SET_CURRENT_PAGE(number))
}

export const getArticles = (offset: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(appActions.FETCHING_ON())
        try {
            const res = await blogAPI.getListArticles(offset);
            const data = res.data
            const {articles, articlesCount} = data
            const action = appActions.GET_ARTICLES({articles, articlesCount})
            dispatch(action)

        } catch (e) {
            dispatch(appActions.ON_ERROR())
        }
         finally {
            dispatch(appActions.FETCHING_OFF())
        }

        setTimeout(() => {
            dispatch(appActions.CLOSE_ALERT())
        }, 3000)
    }
}
