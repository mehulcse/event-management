import { CALL_API, METHODS } from '../../middleware';
import URLs from '../../utils/url';
import {
GET_EVENT_ACTION_TYPES
} from './constants';

export const getEvent = (id) => {
    return ({
        [CALL_API]: {
            requestConfig: {
                baseUrl: URLs.baseUrl,
                useAuth: true,
                url: `${URLs.events}/${id}`,
                method: METHODS.GET,
            },
            types: GET_EVENT_ACTION_TYPES,
        },
    });
};
