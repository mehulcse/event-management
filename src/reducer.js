import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalReducer from './containers/App/reducer';
import homeReducer from './containers/Home/reducer';
import eventsReducer from './containers/Events/reducer';
import eventReducer from './containers/Event/reducer';


export default combineReducers({
    global: globalReducer,
    routing: routerReducer,
    home: homeReducer,
    events: eventsReducer,
    event: eventReducer
});
