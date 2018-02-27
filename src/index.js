import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'babel-polyfill';
import './assets/css/style.css';

import configureStore from './store';
import App from './routes';

ReactDOM.render(
    <Provider store={configureStore()}>
        <div>
            <App />
            <ToastContainer
                position="top-right"
                type="default"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
        </div>
    </Provider>,
    document.getElementById('root')
);
