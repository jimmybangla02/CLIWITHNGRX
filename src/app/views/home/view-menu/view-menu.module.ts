import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMenuComponent } from './view-menu.component';
import { MenuModule } from '../../../core/menu/menu.module';

@NgModule({
  declarations: [ViewMenuComponent],
  imports: [CommonModule, MenuModule],
  exports: [ViewMenuComponent]
})
export class ViewMenuModule { }
