import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectEventsReducer = state => get(state, 'events');

export const makeSelectIsFetching = () =>
    createSelector([selectEventsReducer], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectEvents = () =>
    createSelector([selectEventsReducer], events => get(events, 'events', []));
