import {
   GET_EVENTS_ACTION_TYPES
} from './constants';

const initialData = {
    isFetching: false,
    events: [],
};

export default function eventsReducer(state = initialData, { payload, ...action }) {
    switch (action.type) {
        case GET_EVENTS_ACTION_TYPES.request:
            return {
                ...state,
                isFetching: true,
            };
        case GET_EVENTS_ACTION_TYPES.success:
            return {
                ...state,
                isFetching: false,
                events: payload,
            };
        case GET_EVENTS_ACTION_TYPES.failure:
            return {
                ...state,
                isFetching: false,
                events: [],
            };
        default:
            return state;
    }
}
