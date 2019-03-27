import { initialMenuState, MenuState, MenuAdapter } from './menu.store';
import { menuActions, menuActionTypes } from './menu.action';

export function menuReducer(
    state: MenuState = initialMenuState,
    action: menuActions,
): MenuState {
    switch (action.type) {
        case menuActionTypes.ADD_ONE:
            return MenuAdapter.addOne(action.payload, state);
        default:
            return state;
    }
}
