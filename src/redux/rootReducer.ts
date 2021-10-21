import {combineReducers} from 'redux';
import {appReducer} from "./App/appReducer";
import {articlesPageReducer} from "./Article/articleReducer";
import {authReducer} from "./Auth/authReducer";


export const rootReducer = combineReducers({
    articles: appReducer,
    articlePage: articlesPageReducer,
    auth: authReducer
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
