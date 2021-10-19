import {ActionsAuthType, AuthUserType} from "../../types/types";

const initialState = {
    user: {} as AuthUserType,
    isFetching: false,
    isAuth: false,
    errors: {
        username: [''],
        email: [''],
        password: [''],
    },
    invalidError: ''
};

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {
        case "FETCHING_OFF":
            return {...state, isFetching: false}
        case "FETCHING_ON":
            return {...state, isFetching: true}
        case "SET_ERRORS":
            return {
                ...state, errors: {
                    username: action.errors.username || '',
                    email: action.errors.email || '',
                    password: action.errors.password || ''
                }
            }
        case "SET_INVALID_ERRORS":
            return {...state, invalidError: action.errors}
        case "SIGN_UP":
            return {...state, user: action.user, isAuth: true, isFetching: false}
        case "SIGN_IN":
            return {
                ...state, user: action.data,
                isAuth: action.data.errors === undefined,
                isFetching: false
            }
        case "LOGOUT":
            return {...state, isAuth: false}
        case "RESET_ERRORS":
            return {
                ...state,
                invalidError: '',
                errors: {
                    username: [''],
                    email: [''],
                    password: [''],
                },
            }
        default:
            return state
    }
}