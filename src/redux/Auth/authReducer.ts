import {ActionsAuthType, AuthUserType} from "../../types/types";

const initialState = {
    user: {} as AuthUserType,
    isFetching: false,
    isAuth: false,
    invalidError: ''
};

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {
        case "FETCHING_OFF":
            return {...state, isFetching: false}
        case "FETCHING_ON":
            return {...state, isFetching: true}
        case "SET_INVALID_ERRORS":
            return {...state, invalidError: action.errors}
        case "LOGIN":
            return {...state, user: action.data, isAuth: action.data.errors === undefined}
        case "LOGOUT":
            return {...state, isAuth: false, user: {} as AuthUserType}
        case "RESET_ERRORS":
            return {...state, invalidError: ''}
        default:
            return state
    }
}