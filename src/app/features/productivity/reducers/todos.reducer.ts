import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/todos.actions'

export interface TodoEntity {
  id: string;
  description: string;
  project?: string;
  completed: boolean;
}

// if your state is just an array then do the entity
export interface TodosState extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();

// this sets up and empty entity state
const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.addTodoFailed, (state, action) => adapter.removeOne(action.payload.id, state)),
  on(actions.addTodoSucceeded, (state, action) => adapter.updateOne({
    id: action.oldId,
    changes: {
      id: action.payload.id
    }
  }, state)),
  on(actions.addTodo, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadTodosSucceeded, (state, action) => adapter.setAll(action.payload, state))
);

export function reducer(state: TodosState = initialState, action: Action): TodosState {
  return reducerFunction(state, action);
}



