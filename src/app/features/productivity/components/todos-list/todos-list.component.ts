import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListModel } from '../../models';
import { ProductivityState, selectToListItemModel } from '../../reducers';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  model$: Observable<TodoListModel>

  constructor(private store: Store<ProductivityState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectToListItemModel)
  }

}
