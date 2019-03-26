import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuService } from '../../core/services/menu.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent],
  providers: [MenuService]
})
export class HomeModule { }
