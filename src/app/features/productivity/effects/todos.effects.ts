import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";



import * as actions from '../actions/todos.actions';
import { TodoEntity } from "../reducers/todos.reducer";
import { of } from "rxjs";



@Injectable()
export class TodoEffects {

  baseUrl = environment.apiUrl;

  // loadTodos -> (loadTodosSucceeded | loadTodosFailed)

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addTodo),
      switchMap(originalAction => this.client.post<TodoEntity>(this.baseUrl + 'todos', {
        description: originalAction.payload.description,
        project: originalAction.payload.project
      }).pipe(
        map(response => actions.addTodoSucceeded({ payload: response, oldId: originalAction.payload.id })),
        catchError((res) => of(actions.addTodoFailed({ payload: originalAction.payload, message: 'you never do dishes' })))
      ))
    ), { dispatch: true }
  )

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTodos),
      switchMap(() => this.client.get<GetTodosResponse>(this.baseUrl + 'todos')
        .pipe(
          map(response => response.data),
          map(payload => actions.loadTodosSucceeded({ payload }))
        )
      )
    )
  );



  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetTodosResponse {
  data: TodoEntity[]
}
