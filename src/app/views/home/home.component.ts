import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../core/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService) {
    this.menuService.getMenus('sn');
  }

  ngOnInit() { }

}
