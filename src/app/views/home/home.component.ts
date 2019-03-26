import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { select, Store} from '@ngrx/store';
import { getMenuById } from '../../core/selectors/menu.selector';
import { AppState } from '../../core/store/app.store';

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
