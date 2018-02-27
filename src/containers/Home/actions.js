import { CALL_API, METHODS } from '../../middleware';
import URLs from '../../utils/url';
import { TEST_ACTION_TYPES } from './constants';

const testAction = () => ({
    [CALL_API]: {
        requestConfig: {
            url: URLs.login,
            method: METHODS.GET,
        },
        types: TEST_ACTION_TYPES,
    },
});

export { testAction };
