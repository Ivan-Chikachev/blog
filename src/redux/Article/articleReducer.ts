import {ArticleType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    currentArticle: {} as ArticleType,
    isError: false,
    isNoData: false,
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        GET_CURRENT_ARTICLE(state, action: PayloadAction<ArticleType>) {
            state.currentArticle = action.payload
            state.isError = false
        },
        CLEAN_CURRENT_ARTICLE(state) {
            state.currentArticle = {} as ArticleType
            state.isError = false
        },
        ON_ERROR(state) {
            state.isError = true
        },
        SET_NO_DATA(state) {
            state.isNoData = true
        }
    }
})

export const articlesReducer = articlesSlice.reducer
export const articlesActions = articlesSlice.actions
