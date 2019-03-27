import {Injectable, OnInit} from '@angular/core';
import { AppState } from '../store/app.store';
import { Store } from '@ngrx/store';
import { Reset, Increment, Decrement } from './counter.action';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements OnInit {

  constructor(private store: Store<AppState>) {

  }
  ngOnInit() {
    this.reset();
  }

  reset(): void {
    this.store.dispatch(new Reset());
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
