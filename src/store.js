import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import apiMiddleware from './middleware';
import rootReducer from './reducer';

export const history = createHistory();

const middleware = [apiMiddleware, thunk, routerMiddleware(history), logger];

const composeEnhancers = composeWithDevTools({
    shouldHotReload: false,
});

export default () => createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));
