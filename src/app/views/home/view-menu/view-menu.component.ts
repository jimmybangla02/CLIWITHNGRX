import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.store';
import { getMenus } from '../../../core/menu/menu.selector';
import { Menu } from '../../../core/menu/menu.model';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.sass']
})
export class ViewMenuComponent implements OnInit {

  @Input('className') set className(val) {
    console.log(val, 'get class name');
    Object.keys(val).forEach(k => {
      this.class = val[k];
    });
  }

  @HostBinding('class') class;

  constructor(private store: Store<AppState>) { }

  viewMenu: Menu[] = [];

  ngOnInit() {
    this.store.pipe(select(getMenus())).subscribe((m: Menu[]) => {
      if (m) {
        this.getMenuDetails(m);
      }
    });
  }

  getMenuDetails(m) {
    Object.keys(m).forEach(k => {
      this.viewMenu = m[k];
    });
  }
}
