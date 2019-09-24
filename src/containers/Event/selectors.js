import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectEventReducer = state => get(state, 'event');

export const makeSelectIsFetching = () =>
    createSelector([selectEventReducer], isFetching => get(isFetching, 'isFetching', {}));

export const makeSelectEvent = () =>
    createSelector([selectEventReducer], event => get(event, 'event', []));
