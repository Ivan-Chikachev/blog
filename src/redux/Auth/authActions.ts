import {AuthUserType, AuthErrorType, ThunkAuthType} from "../../types/types";
import blogAPI from "../../api/api";
import {Dispatch} from "redux";
import {LS} from "../../loacalStorage/localStorage";

export const authActions = {
    signUp: (user: AuthUserType) => ({
        type: "SIGN_UP",
        user
    } as const),
    signIn: (data: any) => ({
        type: "SIGN_IN",
        data
    } as const),
    setErrors: (errors: any) => ({
        type: "SET_ERRORS",
        errors
    } as const),
    setInvalidError: (errors: any) => ({
        type: "SET_INVALID_ERRORS",
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
            const user = response.data
            dispatch(authActions.signUp(user))
            LS.setToken(user.user.token)

        } catch (e: any) {
            dispatch(authActions.fetchingOff())
            const errors = e.response.data.errors
            dispatch(authActions.setErrors(errors))
        }
    }
}

export const signIn = (email: string, password: string): ThunkAuthType => {
    return async (dispatch) => {
        dispatch(authActions.fetchingOn())

        try {
            const response = await blogAPI.auth(email, password)

            const data = response.data
            dispatch(authActions.signIn(data))

            if (data.user.token) {
                LS.setToken(data.user.token)
            }

        } catch (e: any) {
            dispatch(authActions.fetchingOff())
            if (typeof e.response?.data !== 'object') {
                return
            }
            const errors = e.response?.data?.errors?.body
            const errorsBody = errors.join(' ')
            dispatch(authActions.setInvalidError(errorsBody))
        }
    }
}

export const logout = () => (dispatch: Dispatch) => {
    dispatch(authActions.logout())
    LS.removeToken()
}

export const resetErrors = () => (dispatch: Dispatch) => {
    dispatch(authActions.resetErrors())
}
