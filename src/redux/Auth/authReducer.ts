import {ActionsAuthType, AuthUserType} from "../../types/types";

const initialState = {
    user: {} as AuthUserType,
    isFetching: false,
    isAuth: false,
    invalidError: '',
    errors: {
        username: [''],
        email: [''],
        password: [''],
    },
};

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {
        case "FETCHING_OFF":
            return {...state, isFetching: false}
        case "FETCHING_ON":
            return {...state, isFetching: true}
        case "SET_INVALID_ERRORS":
            return {...state, invalidError: action.errors[0]}
        case "SET_ERRORS":
            return {
                ...state, errors: {
                    username: action.errors.username || '',
                    email: action.errors.email || '',
                    password: action.errors.password || ''
                }
            }
        case "LOGIN":
            return {...state, user: action.data, isAuth: action.data.errors === undefined}
        case "LOGOUT":
            return {...state, isAuth: false, user: {} as AuthUserType}
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