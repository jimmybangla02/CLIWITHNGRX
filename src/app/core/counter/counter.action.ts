import { Action } from '@ngrx/store';

export enum counterActionTypes {
    Increment = '[Counter] Increment',
    Decrement = '[Counter] Decrement',
    Reset = '[Counter] Reset',
}

export type counterActions = Increment | Decrement | Reset;

export class Increment implements Action {
    readonly type = counterActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = counterActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = counterActionTypes.Reset;
}
