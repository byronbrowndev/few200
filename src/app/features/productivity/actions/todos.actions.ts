import { createAction, props } from "@ngrx/store";
import { TodoEntity } from "../reducers/todos.reducer";

// initiator (command - effect)
export const loadTodos = createAction(
  '[productivity todos] load the todos'
);

// success
export const loadTodosSucceeded = createAction(
  '[productivity todos] loading todos succeeded',
  props<{ payload: TodoEntity[] }>()
);

// failure
export const loadTodosFailed = createAction(
  '[productivity todo] loading todos failed',
  props<{ payload: string }>()
);

let fakeId = 1;
export const addTodo = createAction(
  '[productivity todos] add todo',
  ({ name, project }: TodoCreate) => ({
    payload: {
      description: name,
      completed: false,
      project,
      id: 'TEMP' + fakeId++,
    } as TodoEntity
  })
);

interface TodoCreate {
  name: string,
  project: string
}
