
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { menuReducer } from '../menu/menu.reducer';
import { MenuState } from '../menu/menu.store';

import { CounterState } from '../counter/counter.store';
import { counterReducer } from '../counter/counter.reducer';

export interface AppState {
  IMenu: MenuState;
  ICounter: CounterState;
}

export const appReducer: ActionReducerMap<any> = {
  IMenu: menuReducer,
  ICounter: counterReducer
}

export const metaReducers: MetaReducer<AppState>[] = [storeFreeze];
