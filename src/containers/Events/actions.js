import { CALL_API, METHODS } from '../../middleware';
import URLs from '../../utils/url';
import {
GET_EVENTS_ACTION_TYPES
} from './constants';

export const getEvents = () => {
    return ({
        [CALL_API]: {
            requestConfig: {
                baseUrl: URLs.baseUrl,
                useAuth: true,
                url: URLs.events,
                method: METHODS.GET,
            },
            types: GET_EVENTS_ACTION_TYPES,
        },
    });
};
