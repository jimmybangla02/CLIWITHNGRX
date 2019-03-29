import { MainMenu } from './menu.model';

export interface MenuState extends MainMenu {
    id: string | null;
}

export const initialMenuState: MenuState = {
    id: null,
    menu: null
};


