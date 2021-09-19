import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from './redux/rootReducer';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    // devTools,
));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
