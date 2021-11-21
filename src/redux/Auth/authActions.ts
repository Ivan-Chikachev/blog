import blogAPI from "../../services/api";
import {LS} from "../../loacalStorage/localStorage";
import {AppDispatch} from "../rootReducer";
import {authActions} from "./authReducer";
import {appActions} from "../App/appReducer";
import {enumAlertType} from "../../types/types";


export const signUp = (username: string, email: string, password: string) => {
    return async (dispatch: AppDispatch) => {

        dispatch(appActions.FETCHING_ON())
        try {
            const response = await blogAPI.register(username, email, password)
            const data = response.data
            dispatch(authActions.LOGIN({data}))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }

        } catch (e: any) {
            const errors = e.response?.data?.errors
            if (typeof errors === 'object') {
                dispatch(authActions.SET_ERRORS(errors))
            }
        }
        dispatch(appActions.FETCHING_OFF())
    }
}

export const signIn = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {

        dispatch(appActions.FETCHING_ON())
        try {
            const response = await blogAPI.auth(email, password)
            const data = response.data
            dispatch(authActions.LOGIN({data}))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }

        } catch (e: any) {
            if (typeof e.response?.data !== 'object') {
                return
            }
            const errors = e.response?.data?.errors
            if (errors['email or password']) {
                dispatch(authActions.SET_INVALID_ERRORS(errors['email or password']))
            }
        } finally {
            dispatch(appActions.FETCHING_OFF())
        }
    }
}

export const logout = () => (dispatch: AppDispatch) => {
    dispatch(authActions.LOGOUT())
    LS.removeToken()
    dispatch(appActions.SHOW_ALERT({
        msg: 'You are logged out', type: enumAlertType.info
    }))
    setTimeout(() => {
        dispatch(appActions.CLOSE_ALERT())
    }, 3000)
}

export const loginToken = () => {
    return async (dispatch: AppDispatch) => {

        dispatch(appActions.FETCHING_ON())
        try {
            const response = await blogAPI.getUser()
            const data = response.data
            dispatch(authActions.LOGIN({data}))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(appActions.FETCHING_OFF())
        }
    }
}

export const resetErrors = () => (dispatch: AppDispatch) => {
    dispatch(authActions.RESET_ERRORS())
}
