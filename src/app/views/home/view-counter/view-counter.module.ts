import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCounterComponent } from './view-counter.component';
import { CounterModule } from '../../../core/counter/counter.module';

@NgModule({
  declarations: [ViewCounterComponent],
  imports: [CommonModule, CounterModule],
  exports: [ViewCounterComponent],
  entryComponents: []
})
export class ViewCounterModule { }
