import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCountingBy } from 'src/app/reducers';
import * as actions from "../../actions/counter.actions";

@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css']
})
export class CounterCountByComponent implements OnInit {

  countingBy$: Observable<number>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countingBy$ = this.store.select(selectCounterCountingBy)
  }

  countBySet(by: number) {
    this.store.dispatch(actions.counterCountBySet({ by }))
  }

}
