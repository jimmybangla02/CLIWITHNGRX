
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MenuState } from './menu.store';
import { menuReducer } from '../reducers/menu-reducer';

export interface AppState {
  IMenu: MenuState;
}

export const appReducer: ActionReducerMap<AppState> = {
  IMenu: menuReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [storeFreeze];
