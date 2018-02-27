import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalReducer from './containers/App/reducer';
import homeReducer from './containers/Home/reducer';


export default combineReducers({
    global: globalReducer,
    routing: routerReducer,
    home: homeReducer,
});
