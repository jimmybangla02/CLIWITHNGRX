import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMenuComponent } from './view-menu.component';
import { MenuModule } from '../../../core/menu/menu.module';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [ViewMenuComponent],
  imports: [CommonModule, MenuModule, MatListModule],
  exports: [ViewMenuComponent]
})
export class ViewMenuModule { }
