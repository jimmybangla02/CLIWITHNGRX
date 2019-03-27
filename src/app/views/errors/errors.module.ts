import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorsModule { }
