import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { ErrorRoutingModule } from './error-routing.module';
import { NoResultsModule } from './no-results/no-results.module';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    NoResultsModule
  ],
  exports: [ErrorsComponent]
})
export class ErrorsModule { }
