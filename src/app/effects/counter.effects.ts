import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from '../actions/counter.actions'
import { filter, map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.counterCountBySet),
      tap(action => localStorage.setItem('by', action.by.toString()))
    ), { dispatch: false }
  )

  loadCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCountBy),
      map(() => localStorage.getItem('by')),
      filter(val => val !== null),
      map(val => +val),
      map(by => actions.counterCountBySet({ by }))
    )
    , { dispatch: true })

  // logEverything$ = createEffect(() =>
  // withouth ofType you get any action
  //   this.actions$.pipe(
  //     tap(action => console.log(`got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // )

  constructor(private actions$: Actions) { }
}
