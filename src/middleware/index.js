import keys from 'lodash/keys';
import includes from 'lodash/includes';
import isObject from 'lodash/isObject';
import get from 'lodash/get';
import { actionWith, callApi, apiActionTypes } from './utils';
import { CALL_API, METHODS } from './constants';

// expose for general purpose use
export { CALL_API, METHODS, apiActionTypes };

export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { types, requestConfig } = callAPI;

    if (!isObject(types) || keys(types).length !== 3) {
        throw new Error('Expected an object with of three action types.');
    }

    if (!isObject(requestConfig)) {
        throw new Error('Expected an object api request config.');
    }

    if (!keys(types).every(type => typeof types[type] === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    const { request: requestType, success: successType, failure: failureType } = types;

    next(
        actionWith(requestConfig, {
            type: requestType,
            ...action,
        })
    );

    return callApi(requestConfig)
        .then(response => {
            const nextAction = actionWith(requestConfig, {
                type: successType,
                payload: response,
                ...action,
            });
            next(nextAction);
            return Promise.resolve(nextAction);
        })
        .catch(exception => {
            const error = get(exception, 'response', {});
            if (error.status === 401) {
                const currentPath = store.getState().routing.pathname;
                if (!includes(currentPath, 'login')) {
                    // next(push(`/login?nextPathname=${currentPath}`));
                } else {
                    next(
                        actionWith(requestConfig, {
                            type: failureType,
                            payload: error.data,
                        })
                    );
                }
                return Promise.resolve();
            }
            const errorMessage = error.data || exception.message || 'Something went wrong';
            next(
                actionWith(requestConfig, {
                    type: failureType,
                    payload: errorMessage,
                })
            );
            return Promise.reject(exception);
        });
};
