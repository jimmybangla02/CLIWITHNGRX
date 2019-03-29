import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';

export const getMenuState = createSelector((state: AppState) => state, (state: AppState) => state.IMenu);

export const getMenus = () => createSelector(
    getMenuState,
    (m) => m.menu && m.menu !== null ? m.menu : null
);
