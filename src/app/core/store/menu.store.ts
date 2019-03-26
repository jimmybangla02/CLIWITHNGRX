import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { Menu } from '../models/menu.model';

export const MenuAdapter = createEntityAdapter<Menu>({
  selectId: (model: Menu) => model.id
});

export interface MenuState extends EntityState<Menu> {
  id: string | null;
}

export const initialMenuState: MenuState = MenuAdapter.getInitialState({
  id: 'menu'
});


