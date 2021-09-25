import {combineReducers} from 'redux';
import {articlesReducer} from "./Articles/articlesReducer";
import {articlesPageReducer} from "./ArticlePage/articlePageReducer";


export const rootReducer = combineReducers({
    articles: articlesReducer,
    articlePage: articlesPageReducer
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
