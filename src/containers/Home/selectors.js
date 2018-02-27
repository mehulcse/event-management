import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectHome = state => get(state, 'home');

export const makeSelectIsFetching = () =>
    createSelector([selectHome], isFetching => get(isFetching, 'isFetching', {}));
