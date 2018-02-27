import axios from 'axios';
import merge from 'lodash/merge';
import TokenManager from '../utils/TokenManager';
import { CALL_API, API_ROOT } from './constants';

export const apiActionTypes = x => ({
    request: `${x}_REQUEST`,
    success: `${x}_SUCCESS`,
    failure: `${x}_FAILURE`,
});

const isTokenEmpty = x => x == null || x === undefined || x === 'undefined';

export const actionWith = (requestConfig, data) => {
    const finalAction = merge({}, requestConfig, data);
    delete finalAction[CALL_API];
    return finalAction;
};

export const callApi = requestConfig => {
    const token = TokenManager.get();
    const headers = isTokenEmpty(token) ? {} : { headers: { } }; //Any custom header should go here.
    const axiosConfig = merge({}, headers, requestConfig, {
        url: `${requestConfig.baseUrl || API_ROOT}${requestConfig.url}`,
        mode: 'no-cors',
    });

    return axios(axiosConfig)
        .then(response => {
            if (response.status >= 200 && response.status <= 204) {
                if (response.data) {
                    if (response.data.error) {
                        return Promise.reject(response.data.error);
                    }
                    return response.data;
                }
                // TODO: Decide what to return when response = "204 No Content"
                return null;
            }
            return Promise.reject(new Error('Unknown API Error'));
        })
        .catch(error => Promise.reject(error));
};
