import {combineReducers} from 'redux';
import {articlesReducer} from "./Articles/articlesReducer";
import {articlesPageReducer} from "./ArticlePage/articlePageReducer";
import {authReducer} from "./Auth/authReducer";


export const rootReducer = combineReducers({
    articles: articlesReducer,
    articlePage: articlesPageReducer,
    auth: authReducer
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
