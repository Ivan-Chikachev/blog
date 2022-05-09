import {AlertType, ArticleType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    articles: [] as Array<ArticleType>,
    currentPage: 1,
    isLoading: false,
    totalArticles: 1,
    isError: false,
    alert: {} as AlertType,
    isShowAlert: false
};
type InitialStateType = typeof initialState

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        GET_ARTICLES(state, action: PayloadAction<{ articles: ArticleType[], articlesCount: number }>) {
            state.articles = action.payload.articles
            state.isError = false
            state.totalArticles = action.payload.articlesCount
        },
        CLEAN_ARTICLE_LIST(state) {
            state.articles = []
            state.isError = false
        },
        SET_CURRENT_PAGE(state, action: PayloadAction<number>) {
            state.articles = []
            state.currentPage = action.payload
        },
        FETCHING_ON(state) {
            state.isLoading = true
        },
        FETCHING_OFF(state) {
            state.isLoading = false
        },
        ON_ERROR(state) {
            state.isError = true
        },
        SHOW_ALERT(state, action: PayloadAction<AlertType>) {
            state.isShowAlert = true
            state.alert = {msg: action.payload.msg, type: action.payload.type}
        },
        CLOSE_ALERT(state) {
            state.isShowAlert = false
            state.alert = {...state.alert, msg: ''}
        }
    }
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions

