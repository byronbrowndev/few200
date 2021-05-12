import { Component, OnInit } from '@angular/core';
import { TodoListModel } from '../../models';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  model: TodoListModel = {
    list: [
      { id: '1', description: 'Feed Cat', completed: false },
      { id: '2', description: 'Buy Tacos', project: 'Home', completed: false },
      { id: '3', description: 'Clean Garage', project: 'Work', completed: true }
    ],
    summary: {
      complete: 10,
      incomplete: 5,
      totalTodos: 42
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
