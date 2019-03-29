import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../../core/menu/menu.module';
import { ViewMenuModule } from './view-menu/view-menu.module';
import { ViewCounterModule } from './view-counter/view-counter.module';
import {MatDividerModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MenuModule,
    ViewMenuModule,
    ViewCounterModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
