import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { CounterAdapter } from './counter.store';

export const getCounterState = createSelector((state: AppState) => state, (state: AppState) => state.IMenu);

export const {
    selectAll: selectAll,
    selectEntities: selectMenuEntities,
    selectIds: selectCounterIds,
    selectTotal: Counter
} = CounterAdapter.getSelectors();

export const getCounterById = (id: string) => createSelector(
    selectMenuEntities,
    (CounterEntities) => CounterEntities[id]
);
