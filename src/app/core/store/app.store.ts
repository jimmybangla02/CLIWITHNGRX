
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import {menuReducer} from '../menu/menu.reducer';
import {MenuState} from '../menu/menu.store';

import { CounterState } from '../counter/counter.store';
import { counterReducer } from '../counter/counter.reducer';

export interface AppState {
  IMenu: MenuState;
}

export const appReducer: ActionReducerMap<AppState> = {
  IMenu: menuReducer
};

export const metaReducers: MetaReducer<AppState>[] = [storeFreeze];
