import { Action } from '@ngrx/store';
import { MainMenu } from './menu.model';

export type menuActions = GetMenu;

export enum menuActionTypes { GET_MENU = '[Menu] GetMenu'}

export class GetMenu implements Action {
    readonly type = menuActionTypes.GET_MENU;
        constructor(public payload: MainMenu) {
    }
}

