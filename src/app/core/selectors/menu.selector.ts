import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { MenuAdapter } from '../store/menu.store';

export const getMenuState = createSelector((state: AppState) => state, (state: AppState) => state.IMenu);

export const {
	selectAll: selectAll,
	selectEntities: selectMenuEntities,
	selectIds: selectMenuIds,
	selectTotal: MenuCount
} = MenuAdapter.getSelectors(getMenuState);

export const getMenuById = (id: string) => createSelector(
	selectMenuEntities,
	(MenuEntities) => MenuEntities[id]
);
