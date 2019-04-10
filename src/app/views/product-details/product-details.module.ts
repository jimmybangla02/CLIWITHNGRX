import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    DropdownModule
  ]
})
export class ProductDetailsModule { }
