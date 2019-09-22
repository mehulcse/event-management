import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalReducer from './containers/App/reducer';
import homeReducer from './containers/Home/reducer';
import eventReducer from './containers/Events/reducer';


export default combineReducers({
    global: globalReducer,
    routing: routerReducer,
    home: homeReducer,
    event: eventReducer,
});
