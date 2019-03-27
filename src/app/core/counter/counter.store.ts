import { CounterModel } from './counter.model';

export interface CounterState extends CounterModel {
    value: number | null;
}

export const initialCounterState = 0;
