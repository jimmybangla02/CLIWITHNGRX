import { initialMenuState, MenuState } from './menu.store';
import { menuActions, menuActionTypes } from './menu.action';

export function menuReducer(
    state: MenuState = initialMenuState,
    action: menuActions,
): MenuState {
    switch (action.type) {
        case menuActionTypes.GET_MENU:
            return state = action.payload;
        default:
            return state;
    }
}
