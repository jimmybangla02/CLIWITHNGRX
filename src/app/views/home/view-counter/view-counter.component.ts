import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/core/counter/counter.service';
import { getCount } from 'src/app/core/counter/counter.selector';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.store';
import { CounterModel } from 'src/app/core/counter/counter.model';

@Component({
  selector: 'app-view-counter',
  templateUrl: './view-counter.component.html',
  styleUrls: ['./view-counter.component.sass']
})
export class ViewCounterComponent implements OnInit {
  count$: Observable<CounterModel>;

  constructor(private countService: CounterService, private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount()));
  }

  ngOnInit() {
  }

  increment() {
    this.countService.increment();
    // this.store.dispatch(new Increment()); //todo if  we want to use direct action
  }

  decrement() {
    this.countService.decrement();
    // this.store.dispatch(new Decrement()); //todo if  we want to use direct action
  }

  reset() {
    this.countService.reset();
    // this.store.dispatch(new Reset()); //todo if  we want to use direct action
  }

}
