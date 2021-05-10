import { Action } from "@ngrx/store";

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'increment':
      return {
        current: state.current + 1
      } as CounterState
    case 'decrement':
      return {
        current: state.current - 1
      } as CounterState
    case 'reset':
      return {
        current: 0
      } as CounterState

    default:
      return state;
  }

}
