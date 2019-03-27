import { Component, OnInit } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { AppState } from '../../core/store/app.store';
import { MenuService } from '../../core/menu/menu.service';
import { getMenuById } from '../../core/menu/menu.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService, private store: Store<AppState>) {
    this.menuService.getMenus('Menu');
  }

  ngOnInit() {
    this.store.pipe(select(getMenuById('Menu'))).subscribe(m => {
      if (m) {
        console.log(m, 'get menu from store');
      }

    });
  }

}
