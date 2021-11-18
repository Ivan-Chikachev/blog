import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from "./App/appReducer";
import {articlesReducer} from "./Article/articleReducer";
import {authReducer} from "./Auth/authReducer";
import {userReducer} from "./User/userReducer";

const rootReducer = combineReducers({
    app: appReducer,
    articles: articlesReducer,
    auth: authReducer,
    user: userReducer
});

export const store = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
