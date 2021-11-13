import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from "./App/appReducer";
import {articleReducer} from "./Article/articleReducer";
import {authReducer} from "./Auth/authReducer";
import {userReducer} from "./User/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    app: appReducer,
    articles: articleReducer,
    auth: authReducer,
    user: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
