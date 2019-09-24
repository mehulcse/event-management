import {
   GET_EVENT_ACTION_TYPES
} from './constants';

const initialData = {
    isFetching: false,
    event: {},
};

export default function eventReducer(state = initialData, { payload, ...action }) {
    switch (action.type) {
        case GET_EVENT_ACTION_TYPES.request:
            return {
                ...state,
                isFetching: true,
            };
        case GET_EVENT_ACTION_TYPES.success:
            return {
                ...state,
                isFetching: false,
                event: payload,
            };
        case GET_EVENT_ACTION_TYPES.failure:
            return {
                ...state,
                isFetching: false,
                event: {},
            };
        default:
            return state;
    }
}
