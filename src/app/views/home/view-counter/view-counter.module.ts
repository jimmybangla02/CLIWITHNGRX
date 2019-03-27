import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCounterComponent } from './view-counter.component';

@NgModule({
  declarations: [ViewCounterComponent],
  imports: [CommonModule],
  exports: [ViewCounterComponent],
  entryComponents: [ViewCounterComponent]
})
export class ViewCounterModule { }
