import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectEventsReducer = state => get(state, 'event');

export const makeSelectIsFetching = () =>
    createSelector([selectEventsReducer], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectEvents = () =>
    createSelector([selectEventsReducer], event => get(event, 'events', []));
