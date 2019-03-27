import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.store';
import { getMenuById } from '../../../core/menu/menu.selector';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.sass']
})
export class ViewMenuComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  viewMenu = '';

  ngOnInit() {
    this.store.pipe(select(getMenuById('Menu'))).subscribe(m => {
      if (m) {
        this.viewMenu = m.name;
        console.log(m, 'get menu from store');
      }
    });
  }

}
