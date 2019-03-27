import { Action } from '@ngrx/store';
import { counterActionTypes } from './counter.action';
import { initialCounterState} from './counter.store';

export function counterReducer(state = initialCounterState, action: Action) {
    switch (action.type) {
        case counterActionTypes.Increment:
            return state  + 1;

        case counterActionTypes.Decrement:
            return state  - 1;

        case counterActionTypes.Reset:
            return 0;

        default:
            return state;
    }
}
