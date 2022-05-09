import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n/i18n';
import { UseTheme } from './theme/useTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UseTheme>
      <Provider store={store()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </UseTheme>
  </React.StrictMode>
);
