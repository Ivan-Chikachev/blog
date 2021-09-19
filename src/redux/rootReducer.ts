import {combineReducers} from 'redux';
import {articlesReducer} from "./Articles/articlesReducer";


export const rootReducer = combineReducers({
    articles: articlesReducer,
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
