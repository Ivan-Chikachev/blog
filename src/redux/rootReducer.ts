import {combineReducers} from 'redux';
import {appReducer} from "./App/appReducer";
import {articleReducer} from "./Article/articleReducer";
import {authReducer} from "./Auth/authReducer";


export const rootReducer = combineReducers({
    app: appReducer,
    articles: articleReducer,
    auth: authReducer
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
