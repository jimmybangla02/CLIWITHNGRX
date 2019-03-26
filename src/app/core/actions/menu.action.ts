import { Action } from '@ngrx/store';
import { Menu } from '../models/menu.model';

export type menuActions = MenuAddOne;

export enum menuActionTypes { ADD_ONE = '[Menu] AddOne'}

export class MenuAddOne implements Action {
	readonly type = menuActionTypes.ADD_ONE;
	constructor(public payload: Menu) {
	 }
}

