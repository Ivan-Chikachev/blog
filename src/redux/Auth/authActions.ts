import {AuthUserType, AuthErrorType, ThunkAuthType} from "../../types/types";
import blogAPI from "../../services/api";
import {Dispatch} from "redux";
import {LS} from "../../loacalStorage/localStorage";
import {appActions} from "../App/appActions";

export const authActions = {
    login: (data: any) => ({
        type: "LOGIN",
        data
    } as const),
    setInvalidError: (errors: any) => ({
        type: "SET_INVALID_ERRORS",
        errors
    } as const),
    setErrors: (errors: any) => ({
        type: "SET_ERRORS",
        errors
    } as const),
    fetchingOff: () => ({type: "FETCHING_OFF"} as const),
    fetchingOn: () => ({type: "FETCHING_ON"} as const),
    logout: () => ({type: "LOGOUT"} as const),
    resetErrors: () => ({type: "RESET_ERRORS"} as const),
}

export const signUp = (username: string, email: string, password: string): ThunkAuthType => {
    return async (dispatch) => {

        dispatch(authActions.fetchingOn())
        try {
            const response = await blogAPI.register(username, email, password)
            const data = response.data
            dispatch(authActions.login(data))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }

        } catch (e: any) {
            const errors = e.response?.data?.errors
            if (typeof errors === 'object') {
                dispatch(authActions.setErrors(errors))
            }
        }
        dispatch(authActions.fetchingOff())
    }
}

export const signIn = (email: string, password: string): ThunkAuthType => {
    return async (dispatch) => {

        dispatch(authActions.fetchingOn())
        try {
            const response = await blogAPI.auth(email, password)
            const data = response.data
            dispatch(authActions.login(data))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }

        } catch (e: any) {
            if (typeof e.response?.data !== 'object') {
                return
            }
            const errors = e.response?.data?.errors
            if (errors['email or password']) {
                dispatch(authActions.setInvalidError(errors['email or password']))
            }
        }
        dispatch(authActions.fetchingOff())
    }
}

export const logout = () => (dispatch: Dispatch) => {
    dispatch(authActions.logout())
    LS.removeToken()
    dispatch(appActions.showAlert({
        msg: 'Вы вышли из системы', type: 'info'
    }))
    setTimeout(() => {
        dispatch(appActions.closeAlert())
    }, 3000)
}

export const loginToken = (): ThunkAuthType => {
    return async (dispatch: Dispatch) => {

        dispatch(authActions.fetchingOn())
        try {
            const response = await blogAPI.getUser()
            const data = response.data
            dispatch(authActions.login(data))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(authActions.fetchingOff())
        }
    }
}

export const resetErrors = () => (dispatch: Dispatch) => {
    dispatch(authActions.resetErrors())
}
