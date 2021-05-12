import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";



import * as actions from '../actions/todos.actions';
import { TodoEntity } from "../reducers/todos.reducer";



@Injectable()
export class TodoEffects {



  // loadTodos -> (loadTodosSucceeded | loadTodosFailed)



  fakeTodos: TodoEntity[] = [
    { id: '1', description: 'Feed Cat', completed: false },
    { id: '2', description: 'Buy Tacos', project: 'Home', completed: false },
    { id: '3', description: 'Clean Garage', project: 'Work', completed: true }
  ]



  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTodos),
      map(() => actions.loadTodosSucceeded({ payload: this.fakeTodos }))
    )
  );



  constructor(private actions$: Actions) { }
}
