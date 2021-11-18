import {AuthUserType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    user: {} as AuthUserType,
    isAuth: false,
    invalidError: '',
    errors: {
        username: [''],
        email: [''],
        password: [''],
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN(state, action: PayloadAction<{ data: AuthUserType }>) {
            state.user = action.payload.data
            state.isAuth = action.payload.data.errors === undefined
        },
        LOGOUT(state) {
            state.isAuth = false
            state.user = {} as AuthUserType
        },
        SET_INVALID_ERRORS(state, action: PayloadAction<string[]>) {
            state.invalidError = action.payload[0]
        },
        SET_ERRORS(state, action: PayloadAction<{ errors: { username: string, email: string, password: string } }>) {
            state.errors.email = [action.payload.errors.email] || ['']
            state.errors.username = [action.payload.errors.username] || ['']
            state.errors.password = [action.payload.errors.password] || ['']
        },
        RESET_ERRORS(state) {
            state.errors.email = ['']
            state.errors.username = ['']
            state.errors.password = ['']
            state.invalidError = ''
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions