import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.store';
import { getMenus } from '../../../core/menu/menu.selector';
import { Menu } from '../../../core/menu/menu.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  list: Menu[] = [];

  ngOnInit() {
    this.store.pipe(select(getMenus())).subscribe((m: Menu[]) => {
      if (m) {
        this.getMenuDetails(m);
      }
    });
  }
  getMenuDetails(m) {
    Object.keys(m).forEach(k => {
      this.list = m[k];
    });
  }

}
