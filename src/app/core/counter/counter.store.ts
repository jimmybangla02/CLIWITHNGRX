import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { CounterModel } from './counter.model';


export const CounterAdapter = createEntityAdapter<CounterModel>({
    selectId: (model: CounterModel) => model.id
});

export interface CounterState extends EntityState<CounterModel> {
    id: string | null;
    value: number;
}

export const initialCounterState: CounterState = CounterAdapter.getInitialState({
    id: 'count',
    value: 0
});
