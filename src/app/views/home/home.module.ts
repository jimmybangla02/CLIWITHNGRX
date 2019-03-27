import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../../core/menu/menu.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
