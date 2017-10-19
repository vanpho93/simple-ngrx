import { Action } from '@ngrx/store';

export interface AppState {
    counter: number;
}

const defaultState: AppState = { counter: 1 };

export function reducer(state = defaultState, action: Action) {
    if (action.type === 'INCREMENT') return { counter: state.counter + 1 };
    if (action.type === 'DESCCREMENT') return { counter: state.counter - 1 };
    return state;
}
