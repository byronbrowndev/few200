import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
// This is for TypeScript. It just let's it know what is going on. None of this creates JavaScript
export interface AppState {
  counter: fromCounter.CounterState
}



export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}



// 1. If you are in a feature module (hint: we are not) create a feature selector.



// 2. Create a selector that return each main property (branches) of your application state.
const selectCounterBranch = (state: AppState) => state.counter;



// 3. Any "helper" selectors.



// 4. Create the selectors your components need.



// We need one that returns the current value of the counter



export const selectCounterCurrentValue = createSelector(
  selectCounterBranch,
  b => b.current
)
// We need one that says whether the reset button on the counter component should be disabled.
export const selectCounterResetButtonDisabled = createSelector(
  selectCounterCurrentValue,
  b => b === 0
)

export const selectCounterCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
)
