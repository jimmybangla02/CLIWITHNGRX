import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';

export const getCounterState = createSelector((state: AppState) => state, (state: AppState) => state.ICounter);

export const getCount = () => createSelector(
    getCounterState,
    (counter) => counter
);
