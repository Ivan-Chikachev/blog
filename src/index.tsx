import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/rootReducer';
import {Provider} from "react-redux";
import './i18n/i18n';
import { UseTheme } from './theme/useTheme';

ReactDOM.render(
    <React.StrictMode>
        <UseTheme>
            <Provider store={store()}>
                <App/>
            </Provider>
        </UseTheme>
    </React.StrictMode>,
    document.getElementById('root')
);
