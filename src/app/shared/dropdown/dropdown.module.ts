import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
