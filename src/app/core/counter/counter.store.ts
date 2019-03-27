import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { CounterModel } from './counter.model';


// export const CounterAdapter = createEntityAdapter<CounterModel>({
//     selectId: (model: CounterModel) => model.id
// });

export interface CounterState extends CounterModel {
    value: number | null;
}

export const initialCounterState = 0;
