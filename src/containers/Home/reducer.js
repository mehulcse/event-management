import {
    TEST_ACTION_TYPES,
} from './constants';

const initialData = {
    isFetching: false,
};

export default function loginReducer(state = initialData, { payload, ...action }) {
    switch (action.type) {
        case TEST_ACTION_TYPES.request:
            return {
                ...state,
                isFetching: true,
            };
        case TEST_ACTION_TYPES.success:
            return {
                ...state,
                isFetching: false,
            };
        case TEST_ACTION_TYPES.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
