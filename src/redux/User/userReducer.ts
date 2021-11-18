import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
};

type InitialStateType = typeof initialState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        FETCHING_OFF(state) {
            state.isFetching = false
        },
        FETCHING_ON(state) {
            state.isFetching = true
        },
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
